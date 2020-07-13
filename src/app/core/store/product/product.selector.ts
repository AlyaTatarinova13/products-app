import {RootState} from '../index';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromProduct from './product.reducers';

export const selectRootState = createFeatureSelector <fromProduct.ProductState> ('product'); // <RootState>('product');
// export const selectRootState = createFeatureSelector <RootState>('product');


export const selectProductList = createSelector(
  selectRootState,
  fromProduct.selectAllProducts
  // (state: RootState) => state.product
);
