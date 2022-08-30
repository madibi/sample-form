import {Inject, Injectable, isDevMode} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {BrowserStorageService} from '@commons/services/browser-storage.service';
import {exhaustMap, map, tap} from 'rxjs/operators';
import {Response} from '@commons/schema/_common/models/classes/response.class';
import {UserService} from '@commons/store/user/user.service';
import {AuthenticateService} from '@commons/services/authenticate.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {UserState} from '@commons/store/user/user.state';
import * as USER_ACTIONS from '@commons/store/user/user.action';
import { AlertService } from '@commons/services/alert.service';
import { RequestCodeRS } from '@commons/schema/_auth/models/dtos/request-code-rs.dto';
import { environment } from '@environments/environment';
import { VerifyCodeRS } from '@commons/schema/_auth/models/dtos/verify-code-rs.dto';
import { UserInfo } from '@commons/schema/user/models/dtos/user-info.dto';
import { UserPrivate } from '@commons/schema/user/models/dtos/user-private.dto';
import { SharedInfoService } from '@commons/services/shared-info.service';
import { RequestCodeType } from '@commons/schema/_auth/models/enums/request-code-type.enum';
import { RequestCodeSmsType } from '@commons/schema/_auth/models/enums/request-code-sms-type.enum';

@Injectable()
export class UserEffects {

  requestCode$ = createEffect(() => this.actions.pipe(ofType(USER_ACTIONS.requestCode),
    tap(async (props) => {
      // if (props.requestCodeRQ.smsType === RequestCodeSmsType.APP) {
        this.userService.requestCode(props.requestCodeRQ)
          .subscribe(async (res: Response<RequestCodeRS>) => {
          if (res.header.methodInfo.status === true) {
            if (isDevMode() || environment.name === 'develop') {
              const code = res.body.message.split(',')[1];
              this.sharedInfoService.userAssetsInfo.entranceSmsCode = code;
            }
            await this.goToVerificationCode(
              props.requestCodeRQ.type,
              props.requestCodeRQ.smsType,
              props.requestCodeRQ.phonePrefix,
              props.requestCodeRQ.mobileNumber,
              props.requestCodeRQ.recaptchaToken as string,
              res.body.message,
              res.body.sessionInfo,
              ''
            );
          } else {
            this.alertService.error(res.header.methodInfo.message);
          }
        });
      // } else {
      //   await this.goToVerificationCode(
      //     props.requestCodeRQ.type,
      //     props.requestCodeRQ.smsType,
      //     props.requestCodeRQ.phonePrefix,
      //     props.requestCodeRQ.mobileNumber,
      //     props.requestCodeRQ.fireBaseToken,
      //     null,
      //     null,
      //   );
      // }
    })
  ),{dispatch: false});

  verifyCode$ = createEffect(() => this.actions.pipe(ofType(USER_ACTIONS.verifyCode),
    exhaustMap((props) => this.userService.verifyCode( {
      smsType: props.smsType,
      phonePrefix: props.phonePrefix,
      mobileNumber: props.mobileNumber,
      sessionInfo: props.sessionInfo,
      code: props.code,
    }).pipe(map((res: Response<VerifyCodeRS>) => {
      if (res.header.methodInfo.status) {
        const accessToken = res.body.token?.accessToken || '';
        const refreshToken = res.body.token?.refreshToken || '';
        const userInfo = res.body.token?.userInfo || null!;
        this.authenticateService.setUserToken(accessToken, refreshToken);
        this.authenticateService.setUserInfo(userInfo);
        this.router.navigateByUrl('welcome').then();
      }
      return USER_ACTIONS.verifyCodeResponse({
        status: res.body.status, message: res.body.message
      });
    })))
  ), {dispatch: false});

  submitUserProfile$ = createEffect(() => this.actions.pipe(ofType(USER_ACTIONS.submitUserProfile),
    exhaustMap((props) => this.userService.submitUserProfile(props.submitType, props.formData)
      .pipe(map((res: Response<UserInfo<UserPrivate>>) => {
      if (res.header.methodInfo.status) {
        this.authenticateService.setUserInfo(res.body);
        this.userState.dispatch(USER_ACTIONS.setProfileFormCondition({isProfileFormEnable: false}));
      }
      return USER_ACTIONS.updateUserInfo({
        userInfo: res.body
      });
    })))
  ), {dispatch: false});

  constructor(
    private actions: Actions,
    private userService: UserService,
    private userState: Store<UserState>,
    private router: Router,
    private authenticateService: AuthenticateService,
    private browserStorageService: BrowserStorageService,
    private sharedInfoService: SharedInfoService,
    private alertService: AlertService,
  ) { }

  async goToVerificationCode(
    type: RequestCodeType,
    smsType: RequestCodeSmsType,
    phonePrefix: string,
    mobileNumber: string,
    recaptchaToken: string,
    message: string,
    sessionInfo: string,
    messageCode: string
  ) {
    this.userState.dispatch(
      USER_ACTIONS.requestCodeResponse({
        requestCodeRQ: {
          type,
          smsType,
          phonePrefix,
          mobileNumber,
          recaptchaToken,
        },
        requestCodeRS: {
          message,
          messageCode,
          sessionInfo
        },
      }));
    this.alertService.success('کد احراز هویت به شما پیامک شد');
    await this.router.navigate(['auth', 'verify-code']);
  }
}
