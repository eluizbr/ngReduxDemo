import { IAccess } from '../models/access.model';
import { LoginActions, LoginActionTypes } from './login.actions';

export interface LoginState extends IAccess {
  isLogged: boolean;
  showSpinner: boolean;
}

export const loginInitialState: LoginState = {
  isLogged: false,
  showSpinner: false
};

export function loginReducer(
  state = loginInitialState,
  action: LoginActions
): LoginState {
  switch (action.type) {
    case LoginActionTypes.LOGIN: {
      return {
        ...state,
        isLogged: false,
        showSpinner: true
      };
    }

    case LoginActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isLogged: true,
        showSpinner: false
      };
    }

    case LoginActionTypes.LOGIN_FAIL:
    case LoginActionTypes.LOGOUT: {
      state = undefined;
      return {
        ...state,
        isLogged: false,
        showSpinner: false
      };
    }

    default:
      return state;
  }
}
