import { RequestCodeSmsType } from '../enums/request-code-sms-type.enum';
import { RequestCodeType } from '../enums/request-code-type.enum';

export interface AuthInfo {
  type: RequestCodeType;
  smsType: RequestCodeSmsType;
  phonePrefix: string;
  mobileNumber: string;
  recaptchaToken: string;
  sessionInfo: string;
  enteredCode: string;
}
