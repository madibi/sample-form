import { AppDirection } from "./../../../_common/models/enums/app-direction.enum";
import { DateType } from "./../../../_common/models/enums/date-type.enum";
import { LanguageCode } from "./../../../_common/models/enums/language-code.enum";
import { LanguageLocale } from "./../../../_common/models/enums/language-locale.enum";
import { LanguageName } from "./../../../_common/models/enums/language-name.enum";

export const DefaultLanguage = {
    id: 1,
    name: LanguageName.ENGLISH,
    languageCode: LanguageCode.En,
    languageLocale: LanguageLocale.US,
    phonePrefix: '+1',
    flagUrl: '',
    direction: AppDirection.LTR,
    dateType: DateType.GREGORIAN,
}