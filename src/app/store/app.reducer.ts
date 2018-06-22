import { NavigationExtras } from '@angular/router';

import { AppActions, RouterActionTypes } from './app.action';

export interface RouterState {
  path?: any[];
  extras?: NavigationExtras;
  query?: object;
}

export const initialState: RouterState = {};

export function routerReducer(
  state = initialState,
  action: AppActions
): RouterState {
  switch (action.type) {
    case RouterActionTypes.GO: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
