import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from '../core/models/Product';
import {ValueChangeCount} from '../product-color-item/product-color-item.component';
import {init} from 'protractor/built/launcher';
import {ProductService} from '../core/services/product.service';
import {BehaviorSubject, Subscription} from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy{
  @Input() product: ProductModel;
  @Input() productId: number;
  private productCount: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.initCount(this.product);
    this.productCount = this.productService.count.subscribe(value => {
      this.product.count = value[this.product.id];
    });
  }

  share() {
    window.alert('The product has been shared');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnDestroy(): void {
    this.productCount.unsubscribe();
  }
}
