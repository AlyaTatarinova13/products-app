import {createAction, props} from '@ngrx/store';
import {SidebarItem} from '../../models/SidebarItems';

export const sidebarLoad = createAction(
  '[SidebarItems] Load'
);

export const sidebarLoadSuccess = createAction(
  '[SidebarItems] Load Success',
  props<{sidebarItems: SidebarItem[]}>()
);

export const sidebarLoadFailed = createAction(
  '[SidebarItems] Load Failed',
  props<{error: string}>()
);
