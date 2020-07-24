import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../core/services/cart.service';
import {Observable, Subscription} from 'rxjs';
import {products} from '../core/fakeBackend/products';
import {PhotoCropperService} from '../core/services/photo-cropper.service';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  public productModel;
  private model: Subscription;
  public photoProduct: ImageCroppedEvent | string;
  public defaultPhoto = 'https://via.placeholder.com/750x600';
  constructor(private route: ActivatedRoute, private cartService: CartService, private photocropperService: PhotoCropperService) {
  }

  ngOnInit(): void {
    this.model = this.route.paramMap.subscribe(
      (product) => {
        this.productModel = products[product.get('productId')];
      }
    );
    this.photoProduct = this.defaultPhoto;
  }

  getPhotoFromServer(e) {
    this.photoProduct = e;
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Продукт добавлен в корзину!');
  }

  ngOnDestroy(): void {
    this.model.unsubscribe();
  }
}
