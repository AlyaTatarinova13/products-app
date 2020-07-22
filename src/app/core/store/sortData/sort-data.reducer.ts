import { Action, createReducer, on } from '@ngrx/store';
import * as SortDataActions from './sort-data.actions';

export const sortDataFeatureKey = 'sortData';

export interface State {
  sortType: number; // 0 - popular, 1 -name, 2-...
  filterAvaliableProducts: boolean;

}

export const initialState: State = {
  sortType: 0,
  filterAvaliableProducts: false,

};


export const reducer = createReducer(
  initialState,

  on(SortDataActions.updateSortDatas, (state, action) => ( {...state, sortType: action.data})),
  // on(SortDataActions.updateSortDatasSuccess, (state, action) => state),
  // on(SortDataActions.updateSortDatasFailure, (state, action) => state),

);

