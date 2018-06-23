import { Action } from '@ngrx/store';

import { IUser } from '../models/user.model';

export enum UsersActionTypes {
  LOAD_USERS = '[Users] Load Users',
  LOAD_USERS_SUCCESS = '[Users] Load Users success',
  LOAD_USERS_FAIL = '[Users] Load Users fail'
}

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_SUCCESS;
  constructor(public payload: IUser[]) {}
}

export class LoadUsersFail implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_FAIL;
}

export type UsersActions = LoadUsers | LoadUsersSuccess | LoadUsersFail;
