import { UserInfo } from './../../../user/models/dtos/user-info.dto';
import { UserPrivate } from './../../../user/models/dtos/user-private.dto';

export interface Token {
  userInfo: UserInfo<UserPrivate>;
  accessToken: string;
  accessTokenExpiresIn: string;
  refreshToken: string;
  refreshTokenExpiresIn: string;
  appId: string;
}
