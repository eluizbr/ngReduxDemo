import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { mergeMap, tap } from 'rxjs/operators';

import { AppState } from '../../../store';
import { UsersService } from '../services/users.service';
import { LoadUsers, LoadUsersSuccess, UsersActionTypes } from './users.actions';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private userService: UsersService,
    private store: Store<AppState>,
    private localStorage: LocalStorage
  ) {}

  @Effect({ dispatch: false })
  users$ = this.actions$.pipe(
    ofType<LoadUsers>(UsersActionTypes.LOAD_USERS),
    mergeMap(action => this.userService.getUsers()),
    tap(users => {
      this.localStorage.setItemSubscribe('users', users);
      this.store.dispatch(new LoadUsersSuccess(users));
    })
  );
}
