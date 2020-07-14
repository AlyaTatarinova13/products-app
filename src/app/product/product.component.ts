import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from '../core/models/Product';
import {ValueChangeCount} from '../product-color-item/product-color-item.component';
import {init} from 'protractor/built/launcher';
import {ProductService} from '../core/services/product.service';
import {BehaviorSubject, Subscription} from 'rxjs';
import { ProductState } from '../core/store/product/product.reducers';
import { Store } from '@ngrx/store';

import {initProductCount} from '../core/store/product/product.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() product: ProductModel;
  @Input() productId: number;
  private productCount: Subscription;

  constructor(private productService: ProductService, private store: Store<ProductState>) {}

  ngOnInit(): void {
    // this.store.dispatch(initProductCount({product: this.product}));
    // this.productService.initCount(this.product);
    // this.productCount = this.productService.count.subscribe(value => {
    //   this.product.count = value[this.product.id];
    // });
  }

  addToCart() {
    window.alert('The product has been added');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnDestroy(): void {
    this.productCount.unsubscribe();
  }
}
