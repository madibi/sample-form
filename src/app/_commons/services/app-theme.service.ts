import { DOCUMENT } from '@angular/common';
import {Inject, Injectable, OnInit} from '@angular/core';
import { AppTheme } from '@commons/schema/_common/models/enums/app-theme.enum';
import { Color } from '@commons/schema/_common/models/interfaces/color.interface';
import { selectAppTheme } from '@commons/store/app/app.selector';
import { AppState } from '@commons/store/app/app.state';
import { TinyColor } from '@ctrl/tinycolor';
import { Store } from '@ngrx/store';
import * as APP_ACTIONS from '@commons/store/app/app.action';

@Injectable({
  providedIn: 'root',
})
export class AppThemeService {

  appTheme: AppTheme = null!;

  primaryColor = '#e91457';
  accentColor = '#547284';
  warnColor = '#f23a2f';
  primaryColorPalette: Color[] = [];
  accentColorPalette: Color[] = [];
  warnColorPalette: Color[] = [];

  constructor(
    @Inject(DOCUMENT)
    private document: Document,    
    private appState: Store<AppState>,  
  ) {
    appState.select(selectAppTheme).subscribe((appTheme) => {
      this.appTheme = appTheme;
      if (appTheme === AppTheme.DARK) {
        this.document.body.classList.remove('app-LIGHT');
        this.document.body.classList.add('app-DARK');
      }
      if (appTheme === AppTheme.LIGHT) {
        this.document.body.classList.remove('app-DARK');
        this.document.body.classList.add('app-LIGHT');
      }
    });   
  }

  init() {
    this.setPrimaryColor();
    this.setAccentColor();
    this.setWarnColor();    
  }

  setPrimaryColor() {
    this.primaryColorPalette = this.computeColors(this.primaryColor);
    this.updateTheme(this.primaryColorPalette, 'primary');
  }

  setAccentColor() {
    this.accentColorPalette = this.computeColors(this.accentColor);
    this.updateTheme(this.accentColorPalette, 'accent');
  }

  setWarnColor() {
    this.warnColorPalette = this.computeColors(this.warnColor);
    this.updateTheme(this.warnColorPalette, 'warn');
  }

  changePrimaryColor(color: string) {
    this.primaryColor = color;
    this.setPrimaryColor();
  }

  changeAccentColor(color: string) {
    this.accentColor = color;
    this.setAccentColor();
  }

  changeWarnColor(color: string) {
    this.warnColor = color;
    this.setWarnColor();
  }

 updateTheme(colors: Color[], theme: string) {
    colors.forEach(color => {
        document.documentElement.style.setProperty(
          `--theme-${theme}-${color.name}`,
          color.hex
        );
        document.documentElement.style.setProperty(
          `--theme-${theme}-contrast-${color.name}`,
          color.darkContrast ? 'rgba(black, 0.87)' : 'white'
        );
      });
  }
  
 computeColors(hex: string): Color[] {
    return [
      this.getColorObject(new TinyColor(hex).lighten(52), '50'),
      this.getColorObject(new TinyColor(hex).lighten(37), '100'),
      this.getColorObject(new TinyColor(hex).lighten(26), '200'),
      this.getColorObject(new TinyColor(hex).lighten(12), '300'),
      this.getColorObject(new TinyColor(hex).lighten(6), '400'),
      this.getColorObject(new TinyColor(hex), '500'),
      this.getColorObject(new TinyColor(hex).darken(6), '600'),
      this.getColorObject(new TinyColor(hex).darken(12), '700'),
      this.getColorObject(new TinyColor(hex).darken(18), '800'),
      this.getColorObject(new TinyColor(hex).darken(24), '900'),
      this.getColorObject(new TinyColor(hex).lighten(50).saturate(30), 'A100'),
      this.getColorObject(new TinyColor(hex).lighten(30).saturate(30), 'A200'),
      this.getColorObject(new TinyColor(hex).lighten(10).saturate(15), 'A400'),
      this.getColorObject(new TinyColor(hex).lighten(5).saturate(5), 'A700')
    ];
  }
  
 getColorObject(value: any, name: any): Color {
    const c = new TinyColor(value);
    return {
      name: name,
      hex: c.toHexString(),
      darkContrast: c.isLight()
    };
  } 
}
