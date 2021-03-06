import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { tap } from 'rxjs/operators';

import { AppState } from '../../../store';
import { Go } from '../../../store/app.action';
import { LoginService } from '../services/login.service';
import { Login, LoginActionTypes, LoginSuccess } from './login.actions';

declare var iziToast: any;
@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private localStorage: LocalStorage,
    private loginService: LoginService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  @Effect({ dispatch: false })
  Login$ = this.actions$.pipe(
    ofType<Login>(LoginActionTypes.LOGIN),

    tap(action => {
      this.loginService
        .doLogin(action.payload)
        .pipe(
          tap(result => {
            const { token, ...data } = result;
            this.localStorage.setItemSubscribe('token', token);
            this.localStorage.setItemSubscribe('data', result);
            this.store.dispatch(new LoginSuccess({ token, ...data }));
            this.store.dispatch(new Go({ path: ['/dashboard'] }));
          })
        )
        .subscribe();
    })
  );
}
