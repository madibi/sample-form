import { FilterType } from './../../../_common/models/enums/filter-type.enum';

export interface PaginationFilter {
  column: string;
  keyword: any;
  filterType: FilterType;
}
