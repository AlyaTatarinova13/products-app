import {sidebarReducer, SidebarState} from './sidebar/sidebar.reducers';
import {ActionReducerMap} from '@ngrx/store';
import {productReducer, ProductState} from './product/product.reducers';

export interface RootState {
  sidebarItems: SidebarState;
  productList: ProductState;
}

export const reducers: ActionReducerMap<RootState> = {
  sidebarItems: sidebarReducer,
  productList: productReducer
};
