import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {productListLoad, productListLoadedSuccess} from './product.actions';
// import { MoviesService } from './movies.service';
import { products } from '../../fakeBackend/products';
import {ProductService} from '../../services/product.service';
import {Action} from '@ngrx/store';

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

  constructor(
    private actions$: Actions,
    private productService: ProductService
    // private moviesService: MoviesService
  ) {}
}
