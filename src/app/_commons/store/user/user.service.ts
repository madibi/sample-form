import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '@commons/schema/_common/models/classes/response.class';
import { RequestCodeRQ } from '@commons/schema/_auth/models/dtos/request-code-rq.dto';
import { RequestCodeRS } from '@commons/schema/_auth/models/dtos/request-code-rs.dto';
import { VerifyCodeRQ } from '@commons/schema/_auth/models/dtos/verify-code-rq.dto';
import { VerifyCodeRS } from '@commons/schema/_auth/models/dtos/verify-code-rs.dto';
import { UserInfo } from '@commons/schema/user/models/dtos/user-info.dto';
import { UserPrivate } from '@commons/schema/user/models/dtos/user-private.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  requestCode(requestCodeRQ: RequestCodeRQ): Observable<Response<RequestCodeRS>> {
    return this.httpClient.post<Response<RequestCodeRS>>('v1/auth/requestCode', requestCodeRQ);
  }

  verifyCode(verifyCodeRQ: VerifyCodeRQ):
    Observable<Response<VerifyCodeRS>> {
    return this.httpClient.post<Response<VerifyCodeRS>>('v1/auth/verifyCode', verifyCodeRQ);
  }

  submitUserProfile(type: 'PROFILE' | 'RESUME', formData: FormData): Observable<Response<UserInfo<UserPrivate>>> {
    const url = `v1/user/users/owner/update/${type}`;
    return this.httpClient.post<Response<UserInfo<UserPrivate>>>(url, formData, {
      reportProgress: true
    });
  }
}
