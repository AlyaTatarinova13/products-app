import {Action, createAction, props} from '@ngrx/store';
import {ProductModel} from '../../models/Product';
import {Update} from '@ngrx/entity';
import * as ProductActions from './product.actions';
import {UpdateNum} from '@ngrx/entity/src/models';

export enum TypesProductActions {
  UpdateNameProduct = '[Product] Update Product Name'
}

export const productListLoad = createAction(
  '[Product List] Load',
);

export const productListLoadedSuccess = createAction(
  '[Product List] Loaded Success',
  props<{ productList: ProductModel[] }>()
);

export const updateProductName = createAction(
  '[Product] Update Product Name',
  props<{ updatingProduct: ProductModel }>()
);

export const updateProductNameSuccess = createAction(
  '[Product] Update Product Name Success',
  props<{ updated: Update<ProductModel> }>()
);

export const initProductCount = createAction(
  '[Product] Init Count',
  props<{ product: ProductModel }>()
);

export const initProductCountSuccess = createAction(
  '[Product] Init Count Success',
  props<{ productId: number, count: number }>()
);

export const updateProductCount = createAction(
  '[Product] Update Count',
  props<{ productCount: number }>()
);
