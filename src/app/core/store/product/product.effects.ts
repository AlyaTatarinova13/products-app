import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {EMPTY} from 'rxjs';
import {map, mergeMap, catchError, tap} from 'rxjs/operators';
import {productListLoad, productListLoadedSuccess, initProductCount} from './product.actions';
// import { products } from '../../fakeBackend/products';
import {ProductService} from '../../services/product.service';
import * as ProductActions from './product.actions';
import {updateProductName} from './product.actions';
import {getMatIconFailedToSanitizeLiteralError} from '@angular/material/icon';
import {Update} from '@ngrx/entity';
import {ProductModel} from '../../models/Product';
import * as ProductSelectors from './product.selector';


@Injectable()
export class ProductEffects {

  productLoad$ = createEffect(() => this.actions$.pipe(
    ofType('[Product List] Load'),
    mergeMap(() => this.productService.getAll()
      .pipe(
        // tap(productList => console.log('productList from product effect: ', productList)),
        map(productList => ProductActions.productListLoadedSuccess({productList})),
      ))
    )
  );

  productUpdateName$ = createEffect(() => this.actions$.pipe(
    ofType('[Product] Update Product Name'),
    mergeMap((payload: { updatingProduct: ProductModel }) => this.productService.updateNameProduct(payload.updatingProduct).pipe(
      tap(updated => console.log('from updateProduct effect', updated)),
      map(updated => ProductActions.updateProductNameSuccess({updated})),
      )
    )
    )
  );

  productCount$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.initProductCount),
    mergeMap((action) => this.productService.initCount(action.product)
      .pipe(
        map(productCount => ProductActions.initProductCountSuccess({productId: action.product.id, count: productCount})),
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {
  }
}
