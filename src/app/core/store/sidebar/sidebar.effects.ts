import {Actions, createEffect, ofType} from '@ngrx/effects';
import {SidebarItemsService} from '../../services/sidebar-items.service';
import {map, mergeMap, tap} from 'rxjs/operators';
import * as SidebarAction from './sidebar.actions';
import {Injectable} from '@angular/core';

@Injectable()
export class SidebarEffects {

  sideBarLoad$ = createEffect(() => this.actions$.pipe(
    ofType('[SidebarItems] Load'),
    mergeMap(() => this.sidebarService.getAll()
      .pipe(
        tap(sidebarItems => console.log('from sidebarLoad effect', sidebarItems)),
        map(sidebarItems => SidebarAction.sidebarLoadSuccess({ sidebarItems })),
      ))
  ));

  constructor(
    private actions$: Actions,
    private sidebarService: SidebarItemsService
  ) {
  }
}
