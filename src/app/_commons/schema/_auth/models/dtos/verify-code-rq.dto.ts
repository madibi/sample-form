import { RequestCodeSmsType } from '../enums/request-code-sms-type.enum';

export interface VerifyCodeRQ {
  smsType: RequestCodeSmsType;
  phonePrefix: string;
  mobileNumber: string;
  sessionInfo: string;
  code: string;
}
