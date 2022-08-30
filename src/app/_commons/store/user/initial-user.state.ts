import {UserState} from '@commons/store/user/user.state';

export const initialUserState: UserState = {
  authInfo: {
    type: undefined!,
    smsType: undefined!,
    phonePrefix:undefined!,
    mobileNumber:undefined!,
    recaptchaToken: undefined!,
    sessionInfo: undefined!,
    enteredCode:undefined!,
  },
  userInfo: {
    user: {
      id: undefined!,
      firstName: undefined!,
      lastName: undefined!,
      genderId: undefined!,
      jobTitle: undefined!,
      phoneNumber: undefined!,
      phonePrefix: undefined!,
      mobileNumber: undefined!,
      emailAddress: undefined!,
      address: undefined!,
      skills: undefined!,
      userName: undefined!,
      aboutMe: undefined!,
      bio: undefined!,
    },
    roles: undefined,
    avatar: {
      width: undefined!,
      height: undefined!,
      averageColor: undefined!,
      path: undefined!,
      extension: undefined!,
      mimeType: undefined!,
    },
  },
  accessToken: undefined!,
  refreshToken: undefined!,
  isProfileFormEnable: undefined!,
  isCompanyInfoFormEnable: undefined!,
};
