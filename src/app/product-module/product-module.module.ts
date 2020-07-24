import {Injectable, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from '../product-list/product-list.component';
import {ProductAlertsComponent} from '../product-alerts/product-alerts.component';
import {ProductDetailsComponent} from '../product-details/product-details.component';
import {Resolve, RouterModule, Routes} from '@angular/router';
import {ProductComponent} from '../product/product.component';
import {ProductService} from '../core/services/product.service';
import {ProductColorListComponent} from '../product-color-list/product-color-list.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {ProductColorItemComponent} from '../product-color-item/product-color-item.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CartComponent} from '../cart/cart.component';
import {ShippingComponent} from '../shipping/shipping.component';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {ImageCropperModule} from 'ngx-image-cropper';
import {Observable, of} from 'rxjs';
import {ProductModel} from '../core/models/Product';
import {HammerModule} from '@angular/platform-browser';
import {PhotoCropperComponent} from '../photo-cropper/photo-cropper.component';

// export class ProductListResolver implements Resolve<ProductModel[]> {
//   constructor() {
//   }

  // resolve(): Observable<ProductModel[]> {
  //   return of(products);
  // }
// }

@Injectable()
export class ProductResolver implements Resolve<ProductModel> {
  constructor(private productService: ProductService) {
  }

  resolve(): Observable<any> {
    // console.log('resolver', this.productService.getProduct(+['productId']));
    return of(this.productService.getProduct(+['productId']));
  }
}

const productRoutes: Routes = [
  {path: 'products/:productId', component: ProductDetailsComponent, resolve: {product: ProductResolver}}, // , resolve: {product: ProductResolver}
  {path: 'cart', component: CartComponent},
  { path: 'shipping', component: ShippingComponent },
  {path: '', component: ProductListComponent}, // , resolve: {productList: ProductListResolver}
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
    SidebarComponent,
    PhotoCropperComponent
  ],
  exports: [
    ProductAlertsComponent,
    ProductComponent,
    ProductListComponent,
    SidebarComponent,
    MatIconModule,
    MatListModule,
    PhotoCropperComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      productRoutes
    ),
    CommonModule,
    MatChipsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    ImageCropperModule,
    HammerModule,
  ],
  providers: [ProductService]
})
export class ProductModuleModule {
}
