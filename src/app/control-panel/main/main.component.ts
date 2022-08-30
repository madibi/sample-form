import { Component, OnInit } from '@angular/core';
import * as App_Actions from '@commons/store/app/app.action';
import { AppLanguageService } from '@commons/services/app-language.service';
import { AppInfoService } from '@commons/services/app-info.service';
import { AppThemeService } from '@commons/services/app-theme.service';
import { AppState } from '@commons/store/app/app.state';
import { Store } from '@ngrx/store';
import { AppTheme } from '@commons/schema/_common/models/enums/app-theme.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  appTheme = AppTheme;

  constructor(
    public appInfoService: AppInfoService,
    public appLanguageService: AppLanguageService,
    public appThemeService: AppThemeService,
    private appState: Store<AppState>,
  ) {}

  onSubmit(): void {
  }

  changeLanguageToEnglish() {
    this.appState.dispatch(App_Actions.setAppLanguage({languageId: 1}));
  }

  changeLanguageToFarsi() {
    this.appState.dispatch(App_Actions.setAppLanguage({languageId: 2}));
  }  

  changeThemeToDark() {
    this.appState.dispatch(App_Actions.setAppTheme({appTheme: AppTheme.DARK}));
  }

  changeThemeToLight() {
    this.appState.dispatch(App_Actions.setAppTheme({appTheme: AppTheme.LIGHT}));
  }

  primaryColorChange(e: any) {
    this.appThemeService.changePrimaryColor(e);
  }

  accentColorChange(e: any) {
    this.appThemeService.changeAccentColor(e);
  }

  warnColorChange(e: any) {
    this.appThemeService.changeWarnColor(e);
  }

  ngOnInit(): void {
  }
}
