import { AppConfiguration } from "@commons/schema/user/models/dtos/app-configuration.dto";
import { AppDirection } from "../enums/app-direction.enum";
import { DateType } from "../enums/date-type.enum";
import { LanguageCode } from "../enums/language-code.enum";
import { LanguageLocale } from "../enums/language-locale.enum";
import { LanguageName } from "../enums/language-name.enum";
import { DefaultLanguage } from "./default-language.constant";
import { DefaultSettings } from "./default-settings.constant";
import { DefaultUi } from "./default-ui.constant";

export const DefaultAppConfig: AppConfiguration = {
    userConfiguration: {
        language: DefaultLanguage,
        ui: DefaultUi,
        settings: DefaultSettings
    },
    generalConfiguration: {
        languages: [
            {
                id: 1,
                name: DefaultLanguage.name,
                languageCode: DefaultLanguage.languageCode,
                languageLocale: DefaultLanguage.languageLocale,
                phonePrefix: '+1',
                flagUrl: '',
                direction: DefaultLanguage.direction,
                dateType: DefaultLanguage.dateType
            },
            {
                id: 2,
                name: LanguageName.FARSI,
                languageCode: LanguageCode.Fa,
                languageLocale: LanguageLocale.IR,
                phonePrefix: '+98',
                flagUrl: '',
                direction: AppDirection.RTL,
                dateType: DateType.JALALI,
            }
        ]
    }
}