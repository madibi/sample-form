
export interface CheckOut {
  status: boolean;
  httpStatus?: number;
  message: string;
  messageCode: string | string[];
}
