import { SortType } from './../../../_common/models/enums/sort-type.enum';

export interface PaginationSort {
  column: string;
  sortType: SortType;
}
