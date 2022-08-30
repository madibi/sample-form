import { UserPublic } from './../../../user/models/dtos/user-public.dto';

export interface UserSemiPrivate extends UserPublic {
    phonePrefix: string;
    mobileNumber: string;
    phoneNumber: string;
    emailAddress: string;
    address: string;
    skills: string;  
    aboutMe: string;  
}