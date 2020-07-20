import {Action, createReducer, createSelector, on} from '@ngrx/store';
import * as ProductActions from './product.actions';
import {ColorModel, ProductModel} from '../../models/Product';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {selectProductState} from './product.selector';

export interface ProductState extends EntityState<ProductModel> {
  selectedProductId: number | null;
}

export function selectUserId(selectedId: ProductModel) {
  return selectedId.id;
}

export function sortById(a: ProductModel, b: ProductModel) {
  return a.id - b.id;
}

export const ProductAdapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>(
  {
    selectId: selectUserId,
    sortComparer: sortById,
  }
);

export const initialProductState: ProductState = ProductAdapter.getInitialState({
  selectedProductId: null,
});

export const productReducer = createReducer(
  initialProductState,
  on(ProductActions.productListLoadedSuccess, (state, {productList}) => {
    // console.log('product reducer: ', ProductAdapter.setAll(productList, state));
    return ProductAdapter.setAll(productList, state);
  }),
  on(ProductActions.updateProductNameSuccess, (state, {updated}) => {
    const result = ProductAdapter.updateOne(updated, state);
    console.log('product reducer updateName: ', result);
    return result;
  })
);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = ProductAdapter.getSelectors();

export const selectAllProducts = selectAll;

export const selectProductById = (id: number) =>
  createSelector(
    selectEntities,
    entities => entities[id],
  );
