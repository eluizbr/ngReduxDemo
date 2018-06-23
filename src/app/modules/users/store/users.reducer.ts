import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { IUser } from '../models/user.model';
import { UsersActions, UsersActionTypes } from './users.actions';

export interface UsersState extends EntityState<IUser> {}

export const userAdpter: EntityAdapter<IUser> = createEntityAdapter<IUser>();

export const userInitialState: UsersState = userAdpter.getInitialState();

export function userReducer(
  state = userInitialState,
  action: UsersActions
): UsersState {
  switch (action.type) {
    case UsersActionTypes.LOAD_USERS: {
      return {
        ...state
      };
    }

    case UsersActionTypes.LOAD_USERS_SUCCESS: {
      return userAdpter.addMany(action.payload, state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectAll,
  selectEntities,
  selectTotal,
  selectIds
} = userAdpter.getSelectors();
