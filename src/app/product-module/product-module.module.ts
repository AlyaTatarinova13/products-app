import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from '../product-list/product-list.component';
import {ProductAlertsComponent} from '../product-alerts/product-alerts.component';
import {ProductDetailsComponent} from '../product-details/product-details.component';
import {RouterModule, Routes} from '@angular/router';

const productRoutes: Routes = [
  {path: 'products/:productId', component: ProductDetailsComponent},
  {path: '', component: ProductListComponent}
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    RouterModule.forRoot(
      productRoutes
    ),
    CommonModule
  ]
})
export class ProductModuleModule {
}
