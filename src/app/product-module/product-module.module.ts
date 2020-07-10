import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from '../product-list/product-list.component';
import {ProductAlertsComponent} from '../product-alerts/product-alerts.component';
import {ProductDetailsComponent} from '../product-details/product-details.component';
import {RouterModule, Routes} from '@angular/router';
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

const productRoutes: Routes = [
  {path: 'products/:productId', component: ProductDetailsComponent}, // , resolve: {product: ProductResolver}
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
  ],
  exports: [
    ProductAlertsComponent,
    ProductComponent,
    ProductListComponent,
    SidebarComponent,
    MatIconModule,
    MatListModule
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
  ],
  providers: [ProductService]
})
export class ProductModuleModule {
}
