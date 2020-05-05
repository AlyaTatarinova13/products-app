import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductModuleModule} from './product-module/product-module.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './core/store/product/product.effects';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './core/store/product/product.reducers'

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ProductModuleModule,
    FlexLayoutModule,
    StoreModule.forRoot({ productList: fromProduct.reducer }),
    [StoreDevtoolsModule.instrument({ maxAge: 50 })],
    EffectsModule.forRoot([ProductEffects]),

  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
