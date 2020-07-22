import {sidebarReducer, SidebarState} from './sidebar/sidebar.reducers';
import {ActionReducerMap} from '@ngrx/store';
import {productReducer, ProductState} from './product/product.reducers';
import * as fromSortData from './sortData/sort-data.reducer';

export interface RootState {
  sidebarItems: SidebarState;
  product: ProductState;
  sortData: fromSortData.State;
}

export const reducers: ActionReducerMap<RootState> = {
  sidebarItems: sidebarReducer,
  product: productReducer,
  sortData: fromSortData.reducer
};
