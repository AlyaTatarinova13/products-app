import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SortDataActions from './sort-data.actions';



@Injectable()
export class SortDataEffects {

  // loadSortDatas$ = createEffect(() => {
  //   return this.actions$.pipe(
  //
  //     ofType(SortDataActions.updateSortDatas),
  //     concatMap(() =>
  //       /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //       of({sortType: 1}).pipe(
  //         map(data => SortDataActions.updateSortDatasSuccess({ data })),
  //         catchError(error => of(SortDataActions.updateSortDatasFailure({ error }))))
  //     )
  //   );
  // }



  constructor(private actions$: Actions) {}

}
