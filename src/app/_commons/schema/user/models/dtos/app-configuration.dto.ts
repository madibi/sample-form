import { Configuration } from '../../models/dtos/configuration.dto';
import { GeneralConfiguration } from './general-configuration.dto';

export interface AppConfiguration {
  userConfiguration: Configuration;
  generalConfiguration: GeneralConfiguration;
}
