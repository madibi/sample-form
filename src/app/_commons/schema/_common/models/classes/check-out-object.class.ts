import { CheckOut } from './check-out.class';

export interface CheckOutObject<T> extends CheckOut {
    object:T;
  }