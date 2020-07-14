import {SidebarState} from './sidebar.reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import { RootState } from '..';
import * as fromSidebar from '../sidebar/sidebar.reducers';
import {state} from '@angular/animations';

// export const selectSidebarState = (state: SidebarState) => {
//   console.log('state', state);
//   return state;
// };

export const selectSidebarItemsState = createFeatureSelector <fromSidebar.SidebarState> ('sidebarItems');

// export const selectSidebarItems = createSelector(
//   selectSidebarState,
//   (state: RootState) => state.sidebarItems
// );
