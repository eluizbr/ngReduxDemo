import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../../store';
import { LoadUsers } from '../store/users.actions';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<any> {
  constructor(private store: Store<AppState>) {}

  resolve() {
    return this.store.dispatch(new LoadUsers());
  }
}
