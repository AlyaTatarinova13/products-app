import { createAction, props } from '@ngrx/store';
import {ProductModel} from '../../models/Product';

export const productListLoad = createAction(
  '[Product List] Load',
  props<{ limit: number; pageNumber: number }>()
);

export const productListLoadedSuccess = createAction(
  '[Product List] Loaded Success',
  props<{productList: ProductModel[] }>()
);
