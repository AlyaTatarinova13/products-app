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
import {ProductService} from '../core/services/ProductService';
import {ProductColorListComponent} from '../product-color-list/product-color-list.component';
import {MatChipsModule} from '@angular/material/chips';
import {ProductColorItemComponent} from '../product-color-item/product-color-item.component';
import {FlexLayoutModule} from '@angular/flex-layout';

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
    return of(this.productService.getProduct(+['id']));
  }
}

const productRoutes: Routes = [
  {path: 'products/:productId', component: ProductDetailsComponent, resolve: {product: ProductResolver}},
  {path: '', component: ProductListComponent, resolve: {productList: ProductListResolver}},
  {path: '**', redirectTo: '/' }
];


@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductComponent,
    ProductColorListComponent,
    ProductColorListComponent,
    ProductColorItemComponent
  ],
  exports: [
    ProductAlertsComponent,
    ProductComponent
  ],
  imports: [
    RouterModule.forRoot(
      productRoutes
    ),
    CommonModule,
    MatChipsModule,
    FlexLayoutModule
  ],
  providers: [ProductService]
})
export class ProductModuleModule {
}
