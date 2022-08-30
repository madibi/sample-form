import { AccessTokenPayload } from './../../../_auth/models/classes/access-token-payload.class';
import { RequestHeaderInfo } from './../../../_common/models/classes/request-header-info.class';

export interface RequestExtended extends Request {
    accessTokenPayload: AccessTokenPayload;
    languageInfo: string;
    headerInfo: RequestHeaderInfo;
  }