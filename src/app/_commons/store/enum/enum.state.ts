
import { Role } from "@commons/schema/_auth/models/dtos/role.dto";
import { Language } from "@commons/schema/_common/models/dtos/language.dto";
import {Options} from "./../../schema/enum/models/dtos/options.dto";

export interface EnumState {
  options: Options;
  roles: Role[];
  languages: Language[];
}
