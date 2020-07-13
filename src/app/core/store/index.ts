import {sidebarReducer, SidebarState} from './sidebar/sidebar.reducers';
import {ActionReducerMap} from '@ngrx/store';
import {productReducer, ProductState} from './product/product.reducers';

export interface RootState {
  sidebarItems: SidebarState;
  product: ProductState;
}

export const reducers: ActionReducerMap<RootState> = {
  sidebarItems: sidebarReducer,
  product: productReducer
};
