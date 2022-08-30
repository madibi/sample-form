import { Role } from './../../../_auth/models/dtos/role.dto';
import { Language } from '../../../_common/models/dtos/language.dto';
import { Options } from './options.dto';

export interface EnumInfo {
    options: Options;
    roles: Role[];  
    languages: Language[]; 
}