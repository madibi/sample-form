import {Action, createReducer, on} from '@ngrx/store';
import { AppState } from '@commons/store/app/app.state';
import { initialAppState } from './initial-app.state';
import * as App_Actions from './app.action';

const reducer = createReducer(
  initialAppState,

  on(App_Actions.resetState, (state: AppState) => ({ ...state, ...{initialAppState} })),

  on(App_Actions.updateAppConfiguration, (state: AppState, appConfiguration) =>
    ({ ...state,
      appConfiguration: {
        userConfiguration: appConfiguration.userConfiguration,
        generalConfiguration: appConfiguration.generalConfiguration,
      }
     })
  ),

  on(App_Actions.updateAppLanguage, (state: AppState, currentLanguage) =>
    ({ ...state,
      appConfiguration: {
        ...state.appConfiguration,
        userConfiguration: {
          ...state.appConfiguration.userConfiguration,
          language: currentLanguage          
        }        
      }
    })
  ),

  on(App_Actions.updateAppTheme, (state: AppState, appTheme) =>
    ({ ...state,
      appConfiguration: {
        ...state.appConfiguration,
        userConfiguration: {
          ...state.appConfiguration.userConfiguration,
          ui: {
            ...state.appConfiguration.userConfiguration.ui,
            appTheme: appTheme.appTheme
          }          
        }        
      }
    })
  ),

  on(App_Actions.updateAppPageHeader, (state: AppState, {pageHeader}) =>
    ({ ...state,
      pageHeader
    })
  ),
);

export const appReducer = (state: AppState | undefined, action: Action) =>
  reducer(state, action);

