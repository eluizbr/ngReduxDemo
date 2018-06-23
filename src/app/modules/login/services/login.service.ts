import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { IAccess } from '../models/access.model';
import { ILogin } from '../models/login.model';

declare var iziToast: any;

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  doLogin(payload: ILogin): Observable<IAccess> {
    return this.http.post<IAccess>(`${environment.url}/login`, payload);
  }
}
