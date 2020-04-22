import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {products} from '../core/fakeBackend/products';
import {CartService} from '../core/services/cart.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  productModel;
  private model: Subscription;

  constructor(private route: ActivatedRoute,  private cartService: CartService) {
  }

  ngOnInit(): void {
    this.model = this.route.paramMap.subscribe(
      (product) => {
        this.productModel = products[product.get('productId')];
      }
    );
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Продукт добавлен в корзину!');
  }

  ngOnDestroy(): void {
    this.model.unsubscribe();
  }
}
