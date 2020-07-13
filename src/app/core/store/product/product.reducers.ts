import {Action, createReducer, on} from '@ngrx/store';
import * as ProductActions from './product.actions';
import {ColorModel, ProductModel} from '../../models/Product';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export interface ProductState extends EntityState<ProductModel> {
  selectedProductId: number | null;
}

export function selectUserId(selectedId: ProductModel) {
  return selectedId.id;
}

export function sortByName(a: ProductModel, b: ProductModel) {
  return a.name.localeCompare(b.name); // compare strings alphabetically. Return -numb, 0 or +numb
}

export const adapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>(
  {
    selectId: selectUserId,
    sortComparer: sortByName,
  }
);

export const initialProductState: ProductState = adapter.getInitialState({
  selectedProductId: null,
});

export const productReducer = createReducer(
  initialProductState,
  on(ProductActions.productListLoadedSuccess, (state, {productList}) => {
    console.log('product reducer: ', adapter.setAll(productList, state));
    return adapter.setAll(productList, state);
  })
);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectAllProducts = selectAll;
