import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { defer } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AppState } from '.';
import { LoginSuccess } from '../modules/login/store/login.actions';
import { Back, Forward, Go, RouterActionTypes } from './app.action';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private localStorage: LocalStorage,
    private store: Store<AppState>
  ) {}

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType<Go>(RouterActionTypes.GO),
    map(action => action.payload),
    tap(({ path, query: queryParams, extras }) => {
      this.router.navigate(path, { queryParams, ...extras });
    })
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType<Back>(RouterActionTypes.BACK),
    tap(() => this.location.back())
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    ofType<Forward>(RouterActionTypes.FORWARD),
    tap(() => this.location.forward())
  );

  @Effect()
  init$ = defer(() => {
    this.localStorage.getItem('data').subscribe(result => {
      if (result) {
        const { token, data } = result;
        this.store.dispatch(new LoginSuccess({ token, ...data }));
      }
    });
  });
}
