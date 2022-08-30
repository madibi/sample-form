import { Role } from './../../../_auth/models/dtos/role.dto';
import { ImageInfo } from './../../../_common/models/dtos/image-info.dto';
import { User } from './../../../user/models/dtos/user.dto';
import { UserPrivate } from './user-private.dto';
import { UserPublic } from './user-public.dto';
import { UserSemiPrivate } from './user-semi-private.dto';

export interface UserInfo<
U extends UserPublic | UserSemiPrivate | UserPrivate | User = UserPublic> {
  user?: U;
  roles?: Role[];
  claims?: number[];
  claimGroups?: number[];
  avatar? : ImageInfo;
}
