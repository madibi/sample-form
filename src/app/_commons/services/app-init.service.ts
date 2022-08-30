import {Injectable} from '@angular/core';
import {AuthenticateService} from '@commons/services/authenticate.service';
import {HttpClient} from '@angular/common/http';
import {BrowserStorageService} from '@commons/services/browser-storage.service';
import {Store} from '@ngrx/store';
import {AppState} from '@commons/store/app/app.state';
import { Router } from '@angular/router';
import * as App_Actions from '@commons/store/app/app.action';
import { AppConfiguration } from '@commons/schema/user/models/dtos/app-configuration.dto';
import {Response} from '@commons/schema/_common/models/classes/response.class';
import { StoringProperty } from '@commons/schema/_common/models/enums/storing-property.enum';
import { DefaultAppConfig } from '@commons/schema/_common/models/constants/default-app-config.constant';
import { Configuration } from '@commons/schema/user/models/dtos/configuration.dto';
import { GeneralConfiguration } from '@commons/schema/user/models/dtos/general-configuration.dto';
import { InitStatus } from '@commons/schema/_common/models/enums/init-status.enum';
import { TranslateService } from '@ngx-translate/core';
import { AppThemeService } from './app-theme.service';


@Injectable({
  providedIn: 'root',
})
export class AppInitService {

  initStatus: InitStatus = InitStatus.UNKNOWN;

  constructor(
    private authenticateService: AuthenticateService,
    private httpClient: HttpClient,
    private browserStorageService: BrowserStorageService,
    private appState: Store<AppState>,
    private router: Router,
    private translateService: TranslateService,
    private appThemeService: AppThemeService,
  ) {
  }

  async initApp(): Promise<AppConfiguration | boolean> {
    const appConfiguration: AppConfiguration = {
      userConfiguration: null!,
      generalConfiguration: null!,
    };
    // get prev values from local
    let localUserConfiguration: Configuration = this.browserStorageService.get(StoringProperty.USER_CONFIGURATION);
    let localGeneralConfiguration: GeneralConfiguration = this.browserStorageService.get(StoringProperty.GENERAL_CONFIGURATION);
    // check if appConfiguration is empty
    // if (localUserConfiguration && Object.keys(localUserConfiguration).length === 0 && localUserConfiguration.constructor === Object) {
    if (!localUserConfiguration && !localGeneralConfiguration) {
      localUserConfiguration = DefaultAppConfig.userConfiguration;
      localGeneralConfiguration = DefaultAppConfig.generalConfiguration;
      this.initStatus = InitStatus.DEFAULT;
    } else {
      this.initStatus = InitStatus.LOCAL;
    };
    appConfiguration.userConfiguration = localUserConfiguration;
    appConfiguration.generalConfiguration = localGeneralConfiguration;

    return await this.appPreparation(appConfiguration) ;
  }

  async checkTokenExpiration(): Promise<boolean> {
    const isTokenExpired = await this.authenticateService.isTokenExpired();
    // always we return true
    // we just need to refresh token, if needed and possible
    return true;
  }

  async appPreparation(appConfiguration: AppConfiguration): Promise<boolean> {
    // try {
    //   const serverConfig = await this.httpClient
    //     .get<Response<AppConfiguration>>('v1/app/configuration').toPromise() as any;
    //   const serverAppConfiguration = serverConfig.body;
    //   for (const [key, value] of Object.entries(appConfiguration)) {
    //     if(appConfiguration[key] === null ) {
    //       appConfiguration[key] = serverAppConfiguration[key];
    //     }
    //   }

    //   // check appConfiguration properties are equal
    //   for (const key of Object.keys(serverAppConfiguration)) {
    //     if(!appConfiguration.hasOwnProperty(key)) {
    //       appConfiguration[key] = serverAppConfiguration[key];
    //     } else {
    //       for (const childKey of Object.keys(serverAppConfiguration[key])) {
    //         if(!appConfiguration[key].hasOwnProperty(childKey)) {
    //           appConfiguration[key][childKey] = serverAppConfiguration[key][childKey];
    //         }
    //       }
    //     }
    //   }
    //   this.initStatus = InitStatus.SERVER;
    // }
    // catch (exp: any) {
    //   console.log(exp.message);
    //   if(this.initStatus === InitStatus.UNKNOWN) {
    //     this.router.navigateByUrl('/error/504').then();
    //   }
    // }
    // finally {
      const currentLanguage = `${appConfiguration.userConfiguration.language.languageCode}-${appConfiguration.userConfiguration.language.languageLocale}`;
      this.translateService.setDefaultLang(currentLanguage);
      this.appThemeService.init();
      this.appState.dispatch(App_Actions.setAppConfiguration(appConfiguration)); 
      return true;
    // }
  }

  printLogo() {
    console.log('                                                                                                      ');   
    console.log('------------------------------------------------------------------------------------------------------');
    console.log('                                                                                                      ');
    console.log('  ██████  ██    ██ ██████       ██████  █████   ██████  ███    ███ ██████   █████  ███    ██ ██    ██ ');
    console.log(' ██    ██ ██    ██ ██   ██     ██      ██   ██ ██    ██ ████  ████ ██   ██ ██   ██ ████   ██  ██  ██  ');
    console.log(' ██    ██ ██    ██ ██████      ██      ███████ ██    ██ ██ ████ ██ ██████  ███████ ██ ██  ██   ████   ');
    console.log(' ██    ██ ██    ██ ██   ██     ██      ██   ██ ██    ██ ██  ██  ██ ██      ██   ██ ██  ██ ██    ██    ');
    console.log('  ██████   ██████  ██   ██      ██████ ██   ██  ██████  ██      ██ ██      ██   ██ ██   ████    ██    ');
    console.log('                                                                                                      ');
    console.log(' TEL:                                                                                                 ');
    console.log(' ADDRESS:                                                                                             ');
    console.log(' WEB:                                                                                                 ');
    console.log('------------------------------------------------------------------------------------------------------');
    console.log('                                                                                                      ');   
  }
}
