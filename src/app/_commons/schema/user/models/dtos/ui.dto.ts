import { AppTheme } from './../../../_common/models/enums/app-theme.enum';

export interface Ui  {
    appTheme: AppTheme; 
    baseColor: string;
    accentColor: string;
    warnColor: string;
    bgColor: string;
    fgColor: string;
}