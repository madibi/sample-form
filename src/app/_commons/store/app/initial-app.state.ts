import { AppState } from '@commons/store/app/app.state';

export const initialAppState: AppState = {
  appConfiguration: {
    userConfiguration: {
      language: {
        id: null!,
        languageCode: null!,
        languageLocale: null!,
        phonePrefix: null!,
        flagUrl: null!,
        name: null!,
        direction: null!,
        dateType: null!,
      },
      ui: {
        appTheme: null!,
        baseColor: null!,
        accentColor: null!,
        warnColor: null!,
        bgColor: null!,
        fgColor: null!,
      },
      settings: {
        isWalkThroughSeen: null!,
      },
    },
    generalConfiguration: {
      languages: null!
    }
  },
  rules: null!,
  pageHeader: null!,
  isNotAlive: null!,
  backDestination: null!,
  isBackTransparent: null!,
  goToTop: null!,
  goToBottom: null!,
  currentPage: null!,
};
