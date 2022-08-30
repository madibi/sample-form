import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, tap } from 'rxjs/operators';
import { AppState } from '@commons/store/app/app.state';
import { Store } from '@ngrx/store';
import { BrowserStorageService } from '@commons/services/browser-storage.service';
import { DOCUMENT } from '@angular/common';
import { AppService } from '@commons/store/app/app.service';
import { HttpClient } from '@angular/common/http';
import { EnumState } from '@commons/store/enum/enum.state';
import { Response } from '@commons/schema/_common/models/classes/response.class';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as App_Actions from '@commons/store/app/app.action';
import * as Enum_Actions from '@commons/store/enum/enum.action';
import * as APP_ACTIONS from '@commons/store/app/app.action';
import { AppConfiguration } from '@commons/schema/user/models/dtos/app-configuration.dto';
import { Configuration } from '@commons/schema/user/models/dtos/configuration.dto';
import { StoringProperty } from '@commons/schema/_common/models/enums/storing-property.enum';
import { AppThemeService } from '@commons/services/app-theme.service';
import { GeneralConfiguration } from '@commons/schema/user/models/dtos/general-configuration.dto';
import { Language } from '@commons/schema/_common/models/dtos/language.dto';

@Injectable()
export class AppEffects {

  setAppConfiguration$ = createEffect(() => this.actions.pipe(
    ofType(App_Actions.setAppConfiguration),
    tap( async (props) => {
      const currentLanguage = `${props.userConfiguration.language.languageCode}-${props.userConfiguration.language.languageLocale}`;
      this.translateService.use(currentLanguage);
      this.browserStorageService.set(StoringProperty.USER_CONFIGURATION, props.userConfiguration);
      this.browserStorageService.set(StoringProperty.GENERAL_CONFIGURATION, props.generalConfiguration);
      // this.enumState.dispatch(Enum_Actions.getEnums(
      //   { languageId: appConfiguration.userConfiguration.language.id.toString() }));
      this.appState.dispatch(App_Actions.updateAppConfiguration(props));
    })
  ), {dispatch: false});

  setAppLanguage$ = createEffect(() => this.actions.pipe(
    ofType(App_Actions.setAppLanguage),
    tap(async (props) => {
      const userConfiguration = this.browserStorageService.get(StoringProperty.USER_CONFIGURATION) as Configuration;
      const generalConfiguration = this.browserStorageService.get(StoringProperty.GENERAL_CONFIGURATION) as GeneralConfiguration;
      const currentLanguage = generalConfiguration.languages.find(l => l.id === props.languageId) as Language;
      userConfiguration.language = currentLanguage;
      this.browserStorageService.set(StoringProperty.USER_CONFIGURATION, userConfiguration);
      this.appState.dispatch(App_Actions.updateAppLanguage(currentLanguage));
    })
    ), {dispatch: false}); 

  setAppTheme$ = createEffect(() => this.actions.pipe(
    ofType(App_Actions.setAppTheme),
    tap(async (props) => {
      const userConfiguration = this.browserStorageService.get(StoringProperty.USER_CONFIGURATION) as Configuration;
      userConfiguration.ui.appTheme = props.appTheme;
      this.browserStorageService.set(StoringProperty.USER_CONFIGURATION, userConfiguration);
      this.appState.dispatch(App_Actions.updateAppTheme(props));      
    })
    ), {dispatch: false});

  httpResponseFail = createEffect(() => this.actions.pipe(
    ofType(App_Actions.httpResponseFail),
    tap(async (props) => {
      console.log(props.message);
    })
    ), {dispatch: false});

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    private actions: Actions,
    private appThemeService: AppThemeService,
    private translateService: TranslateService,
    private browserStorageService: BrowserStorageService,
    private appState: Store<AppState>,
    private enumState: Store<EnumState>,
    private appService: AppService,
    private httpClient: HttpClient,
    private router: Router,
  ) { }
}
