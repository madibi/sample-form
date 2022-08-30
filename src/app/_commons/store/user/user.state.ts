import { UserInfo } from "@commons/schema/user/models/dtos/user-info.dto";
import { UserPrivate } from "@commons/schema/user/models/dtos/user-private.dto";
import { AuthInfo } from "@commons/schema/_auth/models/classes/auth-info.class";

export interface UserState {
  authInfo: AuthInfo;
  userInfo: UserInfo<UserPrivate>;
  accessToken: string;
  refreshToken: string;
  isProfileFormEnable: boolean;
  isCompanyInfoFormEnable: boolean;
}
