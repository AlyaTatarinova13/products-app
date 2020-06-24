import {SidebarItem} from '../../models/SidebarItems';
import {Action, createReducer, on} from '@ngrx/store';
import * as SidebarAction from './sidebar.actions';

export interface SidebarState {
  sidebarItems: SidebarItem[]; // | string
}

export const initialSidebarState: SidebarState = {
  sidebarItems: [],
};

const sidebarReducer = createReducer(
  initialSidebarState,
  on(SidebarAction.sidebarLoadSuccess, (state, action) => {
    console.log('sidebar Reducer', action.sidebarItems);
    return {sidebarItems: action.sidebarItems};
  })
  // on(SidebarAction.sidebarLoadFailed, (state, {error}) => {
  //   return {sidebarItems: error};
  // })
);

export function reducerSidebar(state: SidebarState, action: Action) {
  return sidebarReducer(state, action);
}
