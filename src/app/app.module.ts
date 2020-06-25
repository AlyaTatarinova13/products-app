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
import * as fromProduct from './core/store/product/product.reducers';
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer.component';
import {SidebarEffects} from './core/store/sidebar/sidebar.effects';
import {SidebarItemsService} from './core/services/sidebar-items.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpMockRequestInterceptor} from './core/interceptors/http-mock-request-interceptor';
import {reducers} from './core/store';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ProductModuleModule,
    FlexLayoutModule,
    // StoreModule.forRoot({ productList: fromProduct.reducer }),
    StoreModule.forRoot(reducers),
    [StoreDevtoolsModule.instrument({ maxAge: 50 })],
    EffectsModule.forRoot([SidebarEffects]),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    // StoreRouterConnectingModule.forRoot(),

  ],
  providers: [SidebarItemsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:  HttpMockRequestInterceptor,
      multi: true,
    }],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
