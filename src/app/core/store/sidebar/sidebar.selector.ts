import { createSelector } from '@ngrx/store';
import { RootState } from '..';

export const selectRootState = (state: RootState) => {
  console.log('state', state);
  return state;
};

export const selectSidebarItems = createSelector(
  selectRootState,
  (state: RootState) => state.sidebarItems
);
