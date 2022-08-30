import { SmsIrIds } from './../../../log/models/interfaces/sms-ir-ids.interface';

export interface SmsIrCodeRS {
  Ids: SmsIrIds;
  BatchKey: string;
  IsSuccessful: boolean;
  Message: string;
}
