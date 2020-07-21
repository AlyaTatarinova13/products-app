import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from '../core/models/Product';
import {ValueChangeCount} from '../product-color-item/product-color-item.component';
import {init} from 'protractor/built/launcher';
import {ProductService} from '../core/services/product.service';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {ProductState} from '../core/store/product/product.reducers';
import {select, Store} from '@ngrx/store';

import {initProductCount, updateProductName} from '../core/store/product/product.actions';
import {Update} from '@ngrx/entity';
import {UpdateNum} from '@ngrx/entity/src/models';
import {selectCurrentProductId, selectProductList} from '../core/store/product/product.selector';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  @Input() productId: number;
  private productCount: Subscription;
  private product$: Observable<number>; // Observable<ProductModel>;

  constructor(private productService: ProductService, private store: Store<ProductState>) {
    this.product$ = this.store.pipe(
      select(selectCurrentProductId),
      tap(product => console.log('product component from selector', product)));
  }

  ngOnInit(): void {

  }

  addToCart() {
    window.alert('The product has been added');
    if (this.product.id === 3) {
      const updatingProduct = this.product;
      this.store.dispatch(updateProductName({updatingProduct}));
    }
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
