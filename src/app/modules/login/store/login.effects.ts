import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { tap } from 'rxjs/operators';

import { ErrorHandlerService } from '../../../services/error-handler.service';
import { AppState } from '../../../store';
import { Go } from '../../../store/app.action';
import { LoginService } from '../services/login.service';
import { Login, LoginActionTypes, LoginFail, LoginSuccess } from './login.actions';

declare var iziToast: any;
@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private localStorage: LocalStorage,
    private loginService: LoginService,
    private errorService: ErrorHandlerService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  @Effect({ dispatch: false })
  Login$ = this.actions$.pipe(
    ofType<Login>(LoginActionTypes.LOGIN),
    // mergeMap(action => this.loginService.doLogin(action.payload)),
    tap(action => {
      this.loginService
        .doLogin(action.payload)
        .pipe(
          tap(
            result => {
              const { token, ...data } = result;
              this.localStorage.setItemSubscribe('token', token);
              this.localStorage.setItemSubscribe('data', result);
              this.store.dispatch(new LoginSuccess({ token, ...data }));
              this.store.dispatch(new Go({ path: ['/dashboard'] }));
            },
            err => {
              notify(err.error);
              this.store.dispatch(new LoginFail());
            }
          )
        )
        .subscribe();
    })
  );
}

function notify(data: any): any {
  return iziToast.show({
    title: data.title || 'Error',
    color: 'red',
    icon: data.icon || 'fa fa-remove',
    position: 'bottomCenter',
    layout: 2,
    balloon: true,
    message: data.message || 'Generic error'
  });
}
