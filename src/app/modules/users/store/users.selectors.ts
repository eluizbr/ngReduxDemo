import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUsers from './users.reducer';

export const selectUserState = createFeatureSelector<fromUsers.UsersState>(
  'users'
);

export const selectAllusers = createSelector(
  selectUserState,
  fromUsers.selectAll
);

export const selectUsersTotal = createSelector(
  selectUserState,
  fromUsers.selectTotal
);
