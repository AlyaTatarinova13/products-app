import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SidebarItem} from '../core/models/SidebarItems';
import {sidebarItems} from '../core/fakeBackend/sidebarItems';
import {SidebarItemsService} from '../core/services/sidebar-items.service';
import {MatSidenav} from '@angular/material/sidenav';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public items: Observable<Array<SidebarItem>>;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private sidebarService: SidebarItemsService) { }

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  ngOnInit(): void {
    this.items = this.sidebarService.getAll();

    console.log(this.items);
  }
}