import {Injectable, OnInit} from '@angular/core';
import {BrowserStorageService} from '@commons/services/browser-storage.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserState} from '@commons/store/user/user.state';
import {StoringProperty} from '@commons/schema/_common/models/enums/storing-property.enum';
import {Response} from '@commons/schema/_common/models/classes/response.class';
import * as USER_ACTIONS from '@commons/store/user/user.action';
import { UserPrivate } from '@commons/schema/user/models/dtos/user-private.dto';
import { UserInfo } from '@commons/schema/user/models/dtos/user-info.dto';
import { Token } from '@commons/schema/_auth/models/dtos/token.dto';


const jwtHelperService = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  accessToken = '';
  refreshToken = 'null!';
  userInfo: UserInfo<UserPrivate> = null!;

  constructor(
    private browserStorageService: BrowserStorageService,
    private router: Router,
    private userState: Store<UserState>,
    private httpClient: HttpClient
  ) {
    this.userInfo = this.browserStorageService.get(StoringProperty.USER_INFO);
    this.accessToken = this.browserStorageService.get(StoringProperty.ACCESS_TOKEN);
    this.refreshToken = this.browserStorageService.get(StoringProperty.REFRESH_TOKEN);
    if (!this.accessToken || !this.userInfo) {
      this.clearAll();
    } else {
      const at = JSON.parse(JSON.stringify(this.accessToken));
      const rt = JSON.parse(JSON.stringify(this.refreshToken));
      const ui = JSON.parse(JSON.stringify(this.userInfo));
      this.userState.dispatch(USER_ACTIONS.updateTokens({
        accessToken: at,
        refreshToken: rt
      }));
      this.userState.dispatch(USER_ACTIONS.updateUserInfo({
        userInfo: ui,
      }));
    }
  }

  getUserToken(): string[] {
    return [this.accessToken, this.refreshToken];
  }

  getUserInfo(): UserInfo<UserPrivate> {
    return this.userInfo;
  }

  getUserPrivate(): UserPrivate {
    if(this.userInfo?.user) {
      return this.userInfo.user;
    } else {
      return null!;
    }
  }

  setUserToken(accessToken: string, refreshToken: string): void {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    const at = JSON.parse(JSON.stringify(this.accessToken));
    const rt = JSON.parse(JSON.stringify(this.refreshToken));
    this.userState.dispatch(USER_ACTIONS.updateTokens({
      accessToken: at, refreshToken: rt
    }));
    this.browserStorageService.set(StoringProperty.ACCESS_TOKEN, accessToken);
    this.browserStorageService.set(StoringProperty.REFRESH_TOKEN, refreshToken);
  }

  setUserInfo(userInfo: UserInfo<UserPrivate>): void {
    this.userInfo = userInfo;
    const ui = JSON.parse(JSON.stringify(this.userInfo));
    this.userState.dispatch(USER_ACTIONS.updateUserInfo({userInfo: ui}));
    this.browserStorageService.set(StoringProperty.USER_INFO, userInfo);
  }

  setUserPrivate(userPrivate: UserPrivate): void {
    this.userInfo.user = userPrivate;
    const up = JSON.parse(JSON.stringify(this.userInfo.user));
    this.userState.dispatch(USER_ACTIONS.updateUserPrivate({userPrivate: up}));
    this.browserStorageService.set(StoringProperty.USER_INFO, this.userInfo);
  }

  async isUserAuthorized(): Promise<boolean> {
    const isTokenExpired = await this.isTokenExpired();
    if (this.accessToken && this.userInfo?.user?.id && !isTokenExpired) {
      return true;
    } else {
      this.clearAll();
      return false;
    }
  }

  async isTokenExpired(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.userInfo || !this.userInfo.user || !this.accessToken) {
        resolve(true);
      } else if (!jwtHelperService.isTokenExpired(this.accessToken)) {
        resolve(false);
      } else {
        try {
          const date = {
            refreshToken: this.refreshToken,
            userId: this.userInfo.user.id
          };
          this.httpClient.post<Response<Token>>('v1/auth/refreshToken', date, {headers: {'skip-header-interceptor': 'true'}})
            .subscribe(
              (res: Response<Token>) => {
                if (res.header.methodInfo.status === true) {
                  const accessToken = res.body.accessToken as string;
                  const refreshToken = res.body.refreshToken as string;
                  this.setUserToken(accessToken, refreshToken);
                  resolve(false);
                } else {
                  this.logout();
                  resolve(true);
                }
              },
              (err) => {
                console.log('ERROR ON APP INIT REFRESH TOKEN : ' + err);
                resolve(true);
              },
              () => {
                console.log('complete');
                resolve(true);
              }
            );
        } catch (error) {
          resolve(true);
        }
      }
    });
  }

  logout(): void {
    this.clearAll();
    this.router.navigateByUrl('').then();
  }

  clearAll(): void {
    this.accessToken = null!;
    this.refreshToken = null!;
    this.userInfo = null!;
    this.browserStorageService.clear(StoringProperty.ACCESS_TOKEN);
    this.browserStorageService.clear(StoringProperty.REFRESH_TOKEN);
    this.browserStorageService.clear(StoringProperty.USER_INFO);
    this.userState.dispatch(
      USER_ACTIONS.updateTokens({
        accessToken: null!,
        refreshToken: null!,
      }));
    this.userState.dispatch(
      USER_ACTIONS.resetUserInfo());
  }
}
