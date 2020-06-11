import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {SidebarItem} from '../models/SidebarItems';
import {sidebarItems} from '../fakeBackend/sidebarItems';

@Injectable({
  providedIn: 'root'
})
export class SidebarItemsService {

  constructor() { }

  getAll(): Observable<Array<SidebarItem>> {
    // console.log('sidebarItems');
    return of(sidebarItems);
  }
}
