import { AppConfiguration } from '@commons/schema/user/models/dtos/app-configuration.dto';
import { Language } from '@commons/schema/_common/models/dtos/language.dto';
import { AppDirection } from '@commons/schema/_common/models/enums/app-direction.enum';
import { AppTheme } from '@commons/schema/_common/models/enums/app-theme.enum';
import { createAction, props } from '@ngrx/store';

export const resetState = createAction(
  '[APP] Reset State'
);

export const setAppConfiguration = createAction(
  '[APP] Set App Configuration',
  props<AppConfiguration>()
);

export const updateAppConfiguration = createAction(
  '[APP] Update App Configuration',
  props<AppConfiguration>()
);

export const updateAppPageHeader = createAction(
  '[APP] Update App Page Header',
  props<{ pageHeader: string }>()
);

export const setAppLanguage = createAction(
  '[APP] Set App Language',
  props<{ languageId: number }>()
);

export const updateAppLanguage = createAction(
  '[APP] Update App Language',
  props<Language>()
);

export const setAppTheme = createAction(
  '[APP] Set App Theme',
  props<{appTheme: AppTheme}>()
);

export const updateAppTheme = createAction(
  '[APP] Update App Theme',
  props<{appTheme: AppTheme}>()
);

export const httpResponseFail = createAction(
  '[APP] Http Response Fail',
  props<{message: string}>()
);
