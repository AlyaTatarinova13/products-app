import { Action, createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { ProductModel } from '../../models/Product';

export interface ProductState {
  productList: ProductModel[];
}


export const initialProductState: ProductState = {
  productList: [],
};


const productReducer = createReducer(
  initialProductState,
  // on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
);

export function reducer(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}
