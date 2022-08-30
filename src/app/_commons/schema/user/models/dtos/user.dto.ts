import { UserAvatar } from './user-avatar.dto';
import { Configuration } from './configuration.dto';

export interface User  {
    id: string;
        genderId: string;
    phonePrefix: string;
    mobileNumber: string;
    emailAddress: string;
    userName: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    address?: string;
    isMobileNumberVerified?: boolean;
    isEmailAddressVerified?: boolean;
    bio?: string;
      configuration: Configuration
    avatars: UserAvatar[];
}
