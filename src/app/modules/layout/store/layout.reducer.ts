import { LayoutActions } from './layout.actions';

export interface LayoutState {
  layout?: any;
}

export const layoutInitialState: LayoutState = {};

export function layoutReducer(
  state = layoutInitialState,
  action: LayoutActions
): LayoutState {
  switch (action.type) {
    default:
      return state;
  }
}
