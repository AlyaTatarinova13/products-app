import {Action, createReducer, on} from '@ngrx/store';
import * as SidebarAction from './sidebar.actions';

export interface SidebarState {
  id: number;
  name: string; // | string
}

export const initialSidebarState: SidebarState = {
  id: null,
  name: null,
};

export const sidebarReducer = createReducer(
  initialSidebarState,
  on(SidebarAction.sidebarLoadSuccess, (state, action) => {
    // console.log('sidebar Reducer', action.sidebarItems);
    return action.sidebarItems;
  })
  // on(SidebarAction.sidebarLoadFailed, (state, {error}) => {
  //   return {sidebarItems: error};
  // })
);
