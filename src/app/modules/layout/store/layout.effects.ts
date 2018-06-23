import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { tap } from 'rxjs/operators';

import { AppState } from '../../../store';
import { Go } from '../../../store/app.action';
import { LoginActionTypes, Logout } from '../../login/store/login.actions';
import { ClearUsers } from '../../users/store/users.actions';

@Injectable()
export class LayoutEffects {
  constructor(
    private actions$: Actions,
    private localStorage: LocalStorage,
    private store: Store<AppState>
  ) {}

  @Effect({ dispatch: false })
  Logout$ = this.actions$.pipe(
    ofType<Logout>(LoginActionTypes.LOGOUT),
    tap(() => {
      this.localStorage.clearSubscribe();
      this.store.dispatch(new ClearUsers());
      this.store.dispatch(new Go({ path: ['/login'] }));
    })
  );
}
