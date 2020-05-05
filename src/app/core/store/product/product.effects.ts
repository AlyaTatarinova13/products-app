import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {productListLoad} from './product.actions';
// import { MoviesService } from './movies.service';
import { products } from '../../fakeBackend/products';
import {ProductService} from '../../services/product.service';
import {Action} from '@ngrx/store';

@Injectable()
export class MovieEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Product List] Load'),
    mergeMap(() => this.productService.getAll()
      .pipe(
        map(productList => ({ type: '[Product List] Loaded Success'}) ),
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

const ac: productListLoad = ({ type: '[Product List] Load', pageNumber: 4} );
