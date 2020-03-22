import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductColorListComponent } from './product-color-list/product-color-list.component';
import { ProductComponent } from './product/product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatChipsModule} from '@angular/material/chips';
import { ProductColorItemComponent } from './product-color-item/product-color-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductColorListComponent,
    ProductComponent,
    ProductColorItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatSliderModule
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
    ]),
    FlexLayoutModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
