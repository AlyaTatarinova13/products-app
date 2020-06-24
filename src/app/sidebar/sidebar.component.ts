import {Component, Input, OnInit, ViewChild} from '@angular/core';

import {sidebarLoad} from '../core/store/sidebar/sidebar.actions';
import { SidebarState } from '../core/store/sidebar/sidebar.reducers';
import {SidebarItem} from '../core/models/SidebarItems';
import {SidebarItemsService} from '../core/services/sidebar-items.service';
import { selectSidebarItems} from '../core/store/sidebar/sidebar.selector';
import {Observable} from 'rxjs';
import { Store, select } from '@ngrx/store';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // public items$: Observable< string | Array<SidebarItem>>;
  public items$: Observable<Array<SidebarItem>>;

  opened: boolean;

  constructor(private store: Store<SidebarState>) {
    this.items$ = this.store.pipe(select(selectSidebarItems), tap(val => console.log('from app component', val)));
    // this.items$.pipe(map(val => console.log(val)));
  }

  ngOnInit(): void {
    this.store.dispatch(sidebarLoad());
    // this.items = this.sidebarService.getAll();
    // console.log(this.items);
  }
}
