import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { ILogin } from '../models/login.model';
import { IUser } from '../models/user.model';

declare var iziToast: any;

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  doLogin(payload: ILogin): Observable<IUser> {
    return this.http.post<IUser>(`${environment.url}/login`, payload);
  }
}