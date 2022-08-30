import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { AppDirection } from '@commons/schema/_common/models/enums/app-direction.enum';
import { selectAppLanguage } from '@commons/store/app/app.selector';
import { AppState } from '@commons/store/app/app.state';
import { Store } from '@ngrx/store';
import * as APP_ACTIONS from '@commons/store/app/app.action';
import { LanguageCode } from '@commons/schema/_common/models/enums/language-code.enum';
import { LanguageLocale } from '@commons/schema/_common/models/enums/language-locale.enum';

@Injectable({
  providedIn: 'root'
})
export class AppLanguageService {

  appDirection: AppDirection = null!;
  languageId: number = null!;
  languageCode: LanguageCode = null!;
  languageLocale: LanguageLocale = null!;

  constructor(
    @Inject(DOCUMENT)
    private document: Document,    
    private appState: Store<AppState>,
  ) {
    appState.select(selectAppLanguage).subscribe((language) => {
      this.appDirection = language.direction;
      this.languageId = language.id;
      this.languageCode = language.languageCode;
      this.languageLocale = language.languageLocale;
      if (this.appDirection === AppDirection.LTR) {
        this.document.body.classList.remove('app-RTL');
        this.document.body.classList.add('app-LTR');
        this.document.dir = AppDirection.LTR;
      }
      if (this.appDirection === AppDirection.RTL) {
        this.document.body.classList.remove('app-LTR');
        this.document.body.classList.add('app-RTL');
        this.document.dir = AppDirection.RTL;
      }
    });    
  }
}
