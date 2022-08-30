import { ResponseHeader } from './response-header.class';

export interface Response<T> {
  header: ResponseHeader;
  body: T;
  Get(): Response<T>;
}
