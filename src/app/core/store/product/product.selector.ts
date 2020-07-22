import {RootState} from '../index';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromProduct from './product.reducers';
import {ProductState, selectProductEntities} from './product.reducers';

export const selectProductState = createFeatureSelector<fromProduct.ProductState>('product'); // <RootState>('product');

export const selectProductList = createSelector(
  selectProductState,
  fromProduct.selectAllProducts,
);

export const selectProductById = (id: number) => createSelector(
  selectProductState,
  fromProduct.selectProductEntities,
  entities => entities[id],
);

export const selectCurrentProductId = createSelector(
  selectProductState,
  fromProduct.getSelectedUserId
);

// export const selectPrice = createSelector(
//   selectProductState,
//   (state: ProductState) => state.,
// )

