import {RootState} from '../index';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromProduct from './product.reducers';

export const selectProductState = createFeatureSelector <fromProduct.ProductState> ('product'); // <RootState>('product');


export const selectProductList = createSelector(
  selectProductState,
  fromProduct.selectAllProducts,
);
