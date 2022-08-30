import { CheckOut } from './check-out.class';
import { ResponseSeo } from './response-seo.class';

export interface ResponseHeader {
  processInfo: CheckOut;
  methodInfo: CheckOut;
  responseSeo: ResponseSeo;
}
