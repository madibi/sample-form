import { createSelector } from '@ngrx/store';
import { AppState } from '@commons/store/app/app.state';

export const appState = (state: any) => state.app;

export const selectApp = createSelector(
    appState,
    (app: AppState) => app
);

export const selectAppConfiguration = createSelector(
  appState,
  (app: AppState) => app.appConfiguration
);

export const selectAppLanguage = createSelector(
  appState,
  (app: AppState) => app.appConfiguration.userConfiguration.language
);

export const selectAppTheme = createSelector(
  appState,
  (app: AppState) => app.appConfiguration.userConfiguration.ui.appTheme
);

export const selectAppCurrentPage = createSelector(
  appState,
  (app: AppState) => app.currentPage
);