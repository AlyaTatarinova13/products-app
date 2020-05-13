import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { productListLoad, productListLoadedSuccess, initProductCount } from './product.actions';
import { products } from '../../fakeBackend/products';
import { ProductService } from '../../services/product.service';
import * as ProductActions from './product.actions';

@Injectable()
export class ProductEffects {

  productLoad$ = createEffect(() => this.actions$.pipe(
    ofType('[Product List] Load'),
    mergeMap(() => this.productService.getAll()
      .pipe(
        tap(v => console.log(v)),
        map(productList => ProductActions.productListLoadedSuccess({ productList })),
        // map(productList => productListLoad({productList}))
      ))
  )
  );

  productCount$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.initProductCount),
    mergeMap((action) => this.productService.initCount(action.product) // сюда по идее надо передать id продукта, чтоб я смогла извлечь
      // сам продукт,но как этот id правильно передать сюда?
      .pipe(
        map(productCount => ProductActions.initProductCountSuccess({ productId: action.product.id, count: productCount })),
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
