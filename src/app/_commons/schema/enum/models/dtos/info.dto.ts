import { Role } from './../../../_auth/entities/role.entity';
import { Language } from '../../../_common/entities/language.entity';
import { Option } from './option.dto';

export interface Info {
    options: Option;
    roles: Role[];  
    languages: Language[]; 
}