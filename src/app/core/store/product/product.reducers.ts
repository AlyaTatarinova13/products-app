import {Action, createReducer, on} from '@ngrx/store';
import * as ProductActions from './product.actions';
import {ProductModel} from '../../models/Product';

export interface ProductState {
  productList: ProductModel[];
}

export const initialProductState: ProductState = {
  productList: []
};

export const productReducer = createReducer(
  initialProductState,
  on(ProductActions.productListLoadedSuccess, (state, {productList}) => {
    console.log('product reducer: ', productList);
    return { productList };
  })
);
