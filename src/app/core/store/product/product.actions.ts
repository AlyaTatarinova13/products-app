import { createAction, props } from '@ngrx/store';
import {ProductModel} from '../../models/Product';

export const productListLoad = createAction(
  '[Product List] Load',
);

export const productListLoadedSuccess = createAction(
  '[Product List] Loaded Success',
  props<{ productList: ProductModel[] }>()
);

export const initProductCount = createAction(
  '[Product] Init Count',
  props<{product: ProductModel }>()
);

export const initProductCountSuccess = createAction(
  '[Product] Init Count Success',
  props<{productId: number, count: number }>()
);

export const updateProductCount = createAction(
  '[Product] Update Count',
  props<{productCount: number }>()
);
