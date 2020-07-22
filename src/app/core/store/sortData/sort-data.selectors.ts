import {createFeatureSelector, createSelector, Store} from '@ngrx/store';
import * as fromSortData from './sort-data.reducer';
import * as fromSidebar from '../sidebar/sidebar.reducers';
import {Injectable} from '@angular/core';
import {RootState} from '../index';

export const selectSortDataState = createFeatureSelector<fromSortData.State>('fromSortData.sortDataFeatureKey');

export const selectSortType$ = createSelector(
  selectSortDataState,
  (state: fromSortData.State) => state.sortType
);

@Injectable({
  providedIn: 'root',
})
export class SortDataSelectors {
  constructor(private store$: Store<RootState>) {
  }

  selectSortType$() {
    return this.store$.select(selectSortType$);
  }

}
