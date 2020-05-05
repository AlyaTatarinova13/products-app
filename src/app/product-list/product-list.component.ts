import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductModel} from '../core/models/Product';
import { ProductState } from '../core/store/product/product.reducers';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];

  constructor(private route: ActivatedRoute, private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Product List] Load' });
    this.route.data
      .subscribe(
        (products ) => {
          this.products = products.productList;
        }
      );
  }
}
