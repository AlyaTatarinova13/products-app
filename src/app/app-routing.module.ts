import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// import {ProductListResolver, ProductResolver} from './product-module/product-module.module';
import {ProductResolver} from './product-module/product-module.module';


const routes: Routes = [
  {
    path: './product-module',
    loadChildren: () => import('./product-module/product-module.module').then(m => m.ProductModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductResolver] // ProductListResolver, ProductResolver
})
export class AppRoutingModule {
}
