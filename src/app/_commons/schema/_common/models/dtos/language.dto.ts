import { AppDirection } from '../enums/app-direction.enum';
import { DateType } from '../enums/date-type.enum';
import { LanguageCode } from '../enums/language-code.enum';
import { LanguageLocale } from '../enums/language-locale.enum';
import { LanguageName } from '../enums/language-name.enum';

export interface Language  {
    id: number,
    name: LanguageName;
    languageCode: LanguageCode;
    languageLocale: LanguageLocale;
    phonePrefix: string;
    flagUrl: string;
    direction: AppDirection;
    dateType: DateType;
}