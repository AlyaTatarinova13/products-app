import {createAction, props} from '@ngrx/store';
import {ProductModel} from '../../models/Product';
import {Update} from '@ngrx/entity';

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


export const sortByName = createAction(
  '[ProductList] Sort ProductList By Name'
);

export const sortByPrice = createAction(
  '[ProductList] Sort ProductList By Price'
);

export const sortByPopularity = createAction(
  '[ProductList] Sort ProductList By Popularity'
);


export const sortByNameSuccess = createAction(
  '[ProductList] Sort By Name Success',
  props<{ sortedProductList: ProductModel[] }>()
);

export const sortByPriceSuccess = createAction(
  '[ProductList] Sort By Price Success',
  props<{ productList: ProductModel[] }>()
);

export const sortByPopularitySuccess = createAction(
  '[ProductList] Sort By Popularity Success',
  props<{ productList: ProductModel[] }>()
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
