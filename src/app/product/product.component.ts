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
import {selectProductList} from '../core/store/product/product.selector';
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
  private product$: Observable<ProductModel>;

  constructor(private productService: ProductService, private store: Store<ProductState>) {
  }

  ngOnInit(): void {
    if (this.product.id === 3) {
      const updatingProduct = this.product;
      console.log('updatedProduct from product component: ', updatingProduct);
      this.store.dispatch(updateProductName({updatingProduct}));
    }
  }

  addToCart() {
    window.alert('The product has been added');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
