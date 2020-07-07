import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {sidebarLoad} from '../core/store/sidebar/sidebar.actions';
import {SidebarState} from '../core/store/sidebar/sidebar.reducers';
import {SidebarItem} from '../core/models/SidebarItems';
import {SidebarItemsService} from '../core/services/sidebar-items.service';
import {selectSidebarItems} from '../core/store/sidebar/sidebar.selector';
import {Observable, ReplaySubject} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {map, takeUntil, tap} from 'rxjs/operators';
import {initProductCount} from '../core/store/product/product.actions';
import {RootState} from '../core/store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  public items$: Observable<SidebarItem>;
  public items: SidebarItem | string;
  opened: boolean;
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(private store: Store<RootState>) {
    // this.items$ = this.store.pipe(select(selectSidebarItems), tap(val => console.log('from app component', val)));
    this.items$ = this.store.pipe(select(selectSidebarItems),
      tap(val => console.log('from app component', val)))
      .pipe(tap(sidebar => this.items = JSON.stringify(sidebar)));
  }

  ngOnInit(): void {
    this.store.dispatch(sidebarLoad());
    this.items$.pipe(takeUntil(this.destroy)).subscribe(values => {
      this.items = values;
    });
    // this.store.dispatch({ type: '[SidebarItems] Load' });
  }


  ngOnDestroy(): void {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
