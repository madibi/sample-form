import { LanguageCode } from './../../../_common/models/enums/language-code.enum';
import { LanguageLocale } from './../../../_common/models/enums/language-locale.enum';

export interface RequestHeaderInfo {
  languageCode: LanguageCode;
  languageLocale: LanguageLocale;
}