import {Action, createReducer, createSelector, on} from '@ngrx/store';
import * as ProductActions from './product.actions';
import {ColorModel, ProductModel} from '../../models/Product';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {selectProductState} from './product.selector';

export interface ProductState extends EntityState<ProductModel> {
  selectedProductId: number | null;
}

export function selectProductId(selectedId: ProductModel) {
  return selectedId.id;
}

export function sortByPopularity(a: ProductModel, b: ProductModel) {
  return a.id - b.id;
}

export function sortByName(a: ProductModel, b: ProductModel) {
  return a.name.localeCompare(b.name);
}

export function sortByPrice(a: ProductModel, b: ProductModel) {
  return a.price - b.price;
}

export const ProductAdapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>(
  {
    selectId: selectProductId,
    // sortComparer: sortByPopularity,
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
    return result;
  }),
  on(ProductActions.sortByNameSuccess, (state, {sortedProductList}) => {
    // console.log('product reducer sortByNameSuccess: ', productList);
    // ProductAdapter.sortComparer = sortByName;
    console.log('product reducer sortByNameSuccess: ', sortedProductList);
    return ProductAdapter.setAll(sortedProductList, state);
  })
);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = ProductAdapter.getSelectors();

export const selectAllProducts = selectAll;
export const selectProductEntities = selectEntities;
export const getSelectedUserId = (state: ProductState) => state.selectedProductId;

