import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of, pipe} from 'rxjs';
import {SidebarItem} from '../models/SidebarItems';
import {map} from 'rxjs/operators';
import {on} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})

export class SidebarItemsService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<SidebarItem>> { // Observable<Array<SidebarItem>>
    console.log('From service:');
    this.http.get<Array<SidebarItem>>(`sidebarItems`).pipe().subscribe({
      next: console.log
    });
    return this.http.get<Array<SidebarItem>>(`sidebarItems`);
  }
}
