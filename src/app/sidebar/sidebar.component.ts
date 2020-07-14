import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {sidebarLoad} from '../core/store/sidebar/sidebar.actions';
import {SidebarItem} from '../core/models/SidebarItems';
import {selectSidebarItemsState} from '../core/store/sidebar/sidebar.selector';
import {Observable, ReplaySubject} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {takeUntil, tap} from 'rxjs/operators';
import {RootState} from '../core/store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public items$: Observable<SidebarItem>;
  opened: boolean;

  constructor(private store: Store<RootState>) {
    this.items$ = this.store.pipe(
      select(selectSidebarItemsState),
      tap(val => console.log('from sidebar component', val)));
  }

  ngOnInit(): void {
    this.store.dispatch(sidebarLoad());
  }
}
