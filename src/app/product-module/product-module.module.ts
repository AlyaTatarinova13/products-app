import {Injectable, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from '../product-list/product-list.component';
import {ProductAlertsComponent} from '../product-alerts/product-alerts.component';
import {ProductDetailsComponent} from '../product-details/product-details.component';
import {Resolve, RouterModule, Routes} from '@angular/router';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {ProductModel} from '../core/models/Product';
import {products} from '../core/fakeBackend/products';
import {ProductComponent} from '../product/product.component';
import {ProductService} from '../core/services/product.service';
import {ProductColorListComponent} from '../product-color-list/product-color-list.component';
import {MatChipsModule} from '@angular/material/chips';
import {ProductColorItemComponent} from '../product-color-item/product-color-item.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CartComponent} from '../cart/cart.component';
import {ShippingComponent} from '../shipping/shipping.component';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../my-counter/counter.reducer';
import { MyCounterComponent } from '../my-counter/my-counter.component';

export class ProductListResolver implements Resolve<ProductModel[]> {
  constructor() {
  }

  resolve(): Observable<ProductModel[]> {
    return of(products);
  }
}

@Injectable()
export class ProductResolver implements Resolve<ProductModel> {
  constructor(private productService: ProductService) {
  }

  resolve(): Observable<ProductModel> {
    // console.log(of(this.productService.getProduct(+['id'])));
    return of(this.productService.getProduct(+['id']));
  }
}

const productRoutes: Routes = [
  {path: 'products/:productId', component: ProductDetailsComponent, resolve: {product: ProductResolver}},
  {path: 'cart', component: CartComponent},
  { path: 'shipping', component: ShippingComponent },
  {path: '', component: ProductListComponent, resolve: {productList: ProductListResolver}},
  {path: '**', redirectTo: '/'}
];


@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductComponent,
    ProductColorListComponent,
    ProductColorListComponent,
    ProductColorItemComponent,
    CartComponent,
    ShippingComponent,
    MyCounterComponent,
  ],
  exports: [
    ProductAlertsComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      productRoutes
    ),
    CommonModule,
    MatChipsModule,
    FlexLayoutModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreModule.forRoot({ countProduct: counterReducer })
  ],
  providers: [ProductService]
})
export class ProductModuleModule {
}
