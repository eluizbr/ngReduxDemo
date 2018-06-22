import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { ErrorHandlerService } from '../../../services/error-handler.service';
import { ILogin } from '../models/login.model';
import { IUser } from '../models/user.model';

declare var iziToast: any;

@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorHandlerService
  ) {}

  doLogin(payload: ILogin): Observable<IUser> {
    return this.http
      .post<IUser>(`${environment.url}/login`, payload)
      .pipe(catchError(this.errorService.handleError));
  }
}
