import { Action, createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import {ColorModel, ProductModel} from '../../models/Product';

export interface ProductState {
  // productList: ProductModel[];
  id: number;
  name: string;
  description: string;
  count: number;
  price: number;
  colorModels: ColorModel[];
}

export const initialProductState: ProductState = {
  // productList: [],
  id: null,
  name: null,
  description: null,
  count: null,
  price: null,
  colorModels: []
};

export const productReducer = createReducer(
  initialProductState,
  on(ProductActions.productListLoadedSuccess, (state, action) => {
    console.log('product reducer: ', action.productList);
    return action.productList;
  })

  // on(ProductActions.initProductCountSuccess, (state, action) => {
  //   console.log('initProductCountSuccess action', action)
  //   return {
  //     ...state, productList:
  //     {
  //       ...state.productList, [action.productId - 1]:
  //         { ...state.productList[action.productId - 1], count: action.count }
  //     }
  //
  //   };
  // })
);

// export function reducer(state: ProductState | undefined, action: Action) {
//   return productReducer(state, action);
// }
