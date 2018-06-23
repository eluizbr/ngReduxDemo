import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { layoutReducer, LayoutState } from '../modules/layout/store/layout.reducer';
import { loginReducer, LoginState } from '../modules/login/store/login.reducer';
import { userReducer, UsersState } from '../modules/users/store/users.reducer';
import { routerReducer, RouterState } from './app.reducer';

export interface AppState {
  router: RouterState;
  layout: LayoutState;
  login: LoginState;
  users: UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  layout: layoutReducer,
  login: loginReducer,
  users: userReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
