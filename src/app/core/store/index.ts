import {sidebarReducer, SidebarState} from './sidebar/sidebar.reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface RootState {
  sidebarItems: SidebarState;
}

export const reducers: ActionReducerMap<RootState> = {
  sidebarItems: sidebarReducer
};
