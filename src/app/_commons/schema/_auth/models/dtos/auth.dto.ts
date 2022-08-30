import { Role } from './role.dto';
import { EndPoint } from './end-point.dto';
import { EndPointGroup } from './end-point-group.dto';

export interface Auth  {
    phonePrefix: string;
    mobileNumber: string;
    emailAddress: string;
    userName: string;
    password?: string;
    isMobileNumberVerified?: boolean;
    isEmailAddressVerified?: boolean;
      roles: Role[];
      claims: EndPoint[];  
      claimGroups: EndPointGroup[];    
    }
