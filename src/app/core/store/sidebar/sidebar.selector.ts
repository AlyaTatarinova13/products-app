import {SidebarState} from './sidebar.reducers';
import { createSelector } from '@ngrx/store';
import {combineAll} from 'rxjs/operators';

export const selectRootState = (state: SidebarState) => state;

export const selectSidebarItems = createSelector(
  selectRootState,
  (state: SidebarState) => state.sidebarItems
);
