import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '@commons/schema/_common/models/classes/response.class';
import { AppConfiguration } from '@commons/schema/user/models/dtos/app-configuration.dto';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  async configuration(): Promise<Response<AppConfiguration> | undefined> {
    return await this.httpClient
      .get<Response<AppConfiguration>>('v1/app/configuration', {})
      .toPromise();
  }

  getAppRules(languageCode: string): Observable<Response<string>> {
    const url = `v1/app/page/rules/${languageCode}`;
    return this.httpClient.get<Response<string>>(url);
  }

  submitAppCompleteInfo(email: string, password: string): Observable<Response<boolean>> {
    return this.httpClient.post<Response<boolean>>('v1/user/completeInfo', {
      email,
      password
    });
  }
}
