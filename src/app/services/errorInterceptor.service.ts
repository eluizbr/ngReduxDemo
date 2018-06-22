import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LoginFail } from '../modules/login/store/login.actions';
import { AppState } from '../store';

declare var iziToast: any;

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 0:
            this.store.dispatch(new LoginFail());
            notify(error.error);
            break;
          case 401:
            notify(error.error);
            this.store.dispatch(new LoginFail());
            break;
          default:
            notify(error.error);
            this.store.dispatch(new LoginFail());
        }

        return throwError(error);
      })
    );
  }
}

function notify(data: any): any {
  return iziToast.show({
    title: data.title || 'Error',
    color: 'red',
    icon: data.icon || 'fa fa-exclamation',
    position: 'bottomCenter',
    layout: 2,
    balloon: true,
    message: data.message || 'Do you have a server running?'
  });
}
