import { Language } from '../../../_common/models/dtos/language.dto';
import { Settings } from './settings.dto';
import { Ui } from './ui.dto';

export interface Configuration  {
    language: Language
    ui: Ui;
    settings: Settings;
}