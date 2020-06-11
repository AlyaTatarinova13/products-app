import { Action, createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { ProductModel } from '../../models/Product';
import { count } from 'rxjs/operators';
import { state } from '@angular/animations';

export interface ProductState {
  productList: ProductModel[];
}


export const initialProductState: ProductState = {
  productList: [],
};

const productReducer = createReducer(
  initialProductState,
  on(ProductActions.productListLoadedSuccess, (state, action) => {
    console.log(action.productList); return { ...state, productList: action.productList };
  }),
  // on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
  on(ProductActions.initProductCountSuccess, (state, action) => {
    console.log('initProductCountSuccess action', action)
    return {
      ...state, productList:
      {
        ...state.productList, [action.productId - 1]:
          { ...state.productList[action.productId - 1], count: action.count }
      }

    };
  })// и вот здесь не понимаю, какое значение залить вторым
);

export function reducer(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}
