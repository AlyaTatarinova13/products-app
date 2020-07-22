import { createAction, props } from '@ngrx/store';

export const updateSortDatas = createAction(
  '[SortData] Load SortDatas',
  props<{ data: number }>()
);

// export const updateSortDatasSuccess = createAction(
//   '[SortData] Load SortDatas Success',
//   props<{ data: any }>()
// );
//
// export const updateSortDatasFailure = createAction(
//   '[SortData] Load SortDatas Failure',
//   props<{ error: any }>()
// );
