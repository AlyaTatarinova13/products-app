import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from '../product-list/product-list.component';
import {ProductAlertsComponent} from '../product-alerts/product-alerts.component';
import {ProductDetailsComponent} from '../product-details/product-details.component';
import {Resolve, RouterModule, Routes} from '@angular/router';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {ProductModel} from '../Product';
import {products} from '../products';
import {ProductComponent} from '../product/product.component';

export class ProductResolver implements Resolve<ProductModel> {
  constructor() {
  }

  resolve(
  ): Observable<any> {
    return of(products);
  }
}

const productRoutes: Routes = [
  {path: 'products/:productId', component: ProductDetailsComponent},
  {path: '', component: ProductListComponent, resolve: {productList: ProductResolver}},
  {path: '**', redirectTo: '/' }
];


@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductComponent,
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
  ]
})
export class ProductModuleModule {
}
