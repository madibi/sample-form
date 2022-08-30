import { AppConfiguration } from "@commons/schema/user/models/dtos/app-configuration.dto";

export interface AppState {
  appConfiguration: AppConfiguration;
  rules: string;
  pageHeader: string;
  isNotAlive: boolean;
  backDestination: string;
  isBackTransparent: boolean;
  goToTop: boolean;
  goToBottom: boolean;
  currentPage: string;
}
