import { createAction, props } from '@ngrx/store';
import {EnumInfo} from "@commons/schema/enum/models/dtos/enum-info.dto";

export const resetState = createAction(
  '[ENUM] Reset State'
);

export const getEnums = createAction(
  '[ENUM] Get Enums',
  props<{ languageId: string }>()
);

export const updateEnums = createAction(
  '[ENUM] Update Enums',
  props<{ enumInfo: EnumInfo }>()
);
