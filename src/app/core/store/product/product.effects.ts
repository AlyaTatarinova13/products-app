import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {EMPTY} from 'rxjs';
import {map, mergeMap, catchError, tap, withLatestFrom} from 'rxjs/operators';
import {ProductService} from '../../services/product.service';
import * as ProductActions from './product.actions';
import {ProductModel} from '../../models/Product';
import {Store} from '@ngrx/store';
import {ProductState, selectAllProducts} from './product.reducers';
import {SortDataSelectors} from '../sortData/sort-data.selectors';


@Injectable()
export class ProductEffects {

  productLoad$ = createEffect(() => this.actions$.pipe(
    ofType('[Product List] Load'),
    mergeMap(() => this.productService.getAll()
      .pipe(
        map(productList => ProductActions.productListLoadedSuccess({productList})),
      ))
    )
  );

  productUpdateName$ = createEffect(() => this.actions$.pipe(
    ofType('[Product] Update Product Name'),
    mergeMap((payload: { updatingProduct: ProductModel }) => this.productService.updateNameProduct(payload.updatingProduct).pipe(
      // tap(updated => console.log('from updateProduct effect', updated)),
      map(updated => ProductActions.updateProductNameSuccess({updated})),
      )
    )
    )
  );

  productListSort$ = createEffect(() => this.actions$.pipe(
    ofType('[ProductList] Sort ProductList By Name'),
    withLatestFrom(this.sortDataSelectors.selectSortType$()),
    mergeMap(([action, sortType]) => {
        console.log('sortType', sortType);
        return this.productService.getAll().pipe(
          tap(productList => console.log('from sort effect', productList)),
          // map( productList => ProductActions.sortByNameSuccess({productList})),
          map(productList => {
            console.log('productList before sorting', productList);
            // productList.sort((a: ProductModel, b: ProductModel) => a.name.localeCompare(b.name))
            const sortedProductList = productList.slice().sort((a: ProductModel, b: ProductModel) => {
              return a.name.localeCompare(b.name);
            });
            console.log('productList after sorting', sortedProductList);
            // this.productService.sortByName(productList);
            return ProductActions.sortByNameSuccess({sortedProductList});
          })
        );
      }
    )));

  // productCount$ = createEffect(() => this.actions$.pipe(
  //   ofType(ProductActions.initProductCount),
  //   mergeMap((action) => this.productService.initCount(action.product)
  //     .pipe(
  //       map(productCount => ProductActions.initProductCountSuccess({productId: action.product.id, count: productCount})),
  //     ))
  //   )
  // );

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private productStore$: Store<ProductState>,
    private sortDataSelectors: SortDataSelectors
  ) {
  }
}
