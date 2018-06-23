import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { tap } from 'rxjs/operators';

import { AppState } from '../../../store';
import { LoadUsers, LoadUsersSuccess } from '../store/users.actions';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<any> {
  constructor(
    private store: Store<AppState>,
    private localStorage: LocalStorage
  ) {}

  resolve() {
    return this.localStorage.getItem('users').pipe(
      tap(users => {
        users
          ? this.store.dispatch(new LoadUsersSuccess(users))
          : this.store.dispatch(new LoadUsers());
      })
    );
  }
}
