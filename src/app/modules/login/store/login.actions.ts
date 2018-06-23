import { Action } from '@ngrx/store';

import { IAccess } from '../models/access.model';
import { ILogin } from '../models/login.model';

export enum LoginActionTypes {
  LOGIN = '[Access] Login user',
  LOGIN_SUCCESS = '[Access] Login success',
  LOGIN_FAIL = '[Access] Login fail',
  LOGOUT = '[Access] Logout user'
}

export class Login implements Action {
  readonly type = LoginActionTypes.LOGIN;
  constructor(public payload: ILogin) {}
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LOGIN_SUCCESS;
  constructor(public payload: IAccess) {}
}

export class LoginFail implements Action {
  readonly type = LoginActionTypes.LOGIN_FAIL;
}

export class Logout implements Action {
  readonly type = LoginActionTypes.LOGOUT;
}

export type LoginActions = Login | LoginSuccess | LoginFail | Logout;
