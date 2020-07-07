import {RootState} from '../index';
import {createSelector} from '@ngrx/store';

export const selectRootState = (state: RootState) => {
  console.log('selectRootState: ', state);
  return state;
};

export const selectProductList = createSelector(
  selectRootState,
  (state: RootState) => state.productList
);
