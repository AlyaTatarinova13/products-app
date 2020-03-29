import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {CartService} from '../core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;

  constructor(
    private cartService: CartService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
}
