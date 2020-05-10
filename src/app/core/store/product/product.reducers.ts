import { Action, createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { ProductModel } from '../../models/Product';
import {count} from 'rxjs/operators';

export interface ProductState {
  productList: ProductModel[];
}


export const initialProductState: ProductState = {
  productList: [],
};

const productReducer = createReducer(
  initialProductState,
  on(ProductActions.productListLoad, state => ({...state, productList: state.productList})),
  // on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
  on(ProductActions.initProductCount, state => ({...state, })) // и вот здесь не понимаю, какое значение залить вторым
);

export function reducer(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}
