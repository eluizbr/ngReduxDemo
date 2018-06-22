import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { layoutReducer, LayoutState } from '../modules/layout/store/layout.reducer';
import { loginReducer, LoginState } from '../modules/login/store/login.reducer';
import { routerReducer, RouterState } from './app.reducer';

export interface AppState {
  router: RouterState;
  layout: LayoutState;
  login: LoginState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  layout: layoutReducer,
  login: loginReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
