import { createSelector } from '@ngrx/store';

import { AppState } from '../../../store';

export const selectLoginState = (state: AppState) => state.login;

export const selectIsLogged = createSelector(
  selectLoginState,
  state => state.isLogged
);

export const selectShowSpinner = createSelector(
  selectLoginState,
  state => state.showSpinner
);
