import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {EMPTY} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {productListLoad, productListLoadedSuccess, initProductCount} from './product.actions';
import {products} from '../../fakeBackend/products';
import {ProductService} from '../../services/product.service';
import {Action} from '@ngrx/store';
import {ProductModel} from '../../models/Product';

@Injectable()
export class ProductEffects {

  productLoad$ = createEffect(() => this.actions$.pipe(
    ofType('[Product List] Load'),
    mergeMap(() => this.productService.getAll()
      .pipe(
        map(productList => productListLoadedSuccess({productList})),
        // map(productList => productListLoad({productList}))
      ))
    )
  );

  productCount$ = createEffect(() => this.actions$.pipe(
    ofType('[Product] Init Count'),
    mergeMap(() => this.productService.initCount(products[0]) // сюда по идее надо передать id продукта, чтоб я смогла извлечь
                                                                              // сам продукт,но как этот id правильно передать сюда?
      .pipe(
        map(productCount => initProductCount({productCount})),
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
    // private moviesService: MoviesService
  ) {
  }
}
