import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductModel} from '../core/models/Product';
import {select, Store} from '@ngrx/store';
import {Observable, pipe, ReplaySubject} from 'rxjs';
import {RootState} from '../core/store';
import {selectProductList} from '../core/store/product/product.selector';
import {takeUntil, tap} from 'rxjs/operators';
import {productListLoad, productListLoadedSuccess} from '../core/store/product/product.actions';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: ProductModel | string;
  products$: Observable<ProductModel>;
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(private store: Store<RootState>) { // private route: ActivatedRoute,
    this.products$ = this.store.pipe(select(selectProductList),
      tap(val => console.log('from product component', val)))
      .pipe(tap(productList => this.products = JSON.stringify(productList)));
  }

  ngOnInit(): void {
    this.store.dispatch(productListLoad());
    this.products$.pipe(takeUntil(this.destroy)).subscribe(values => {
      this.products = values;
    });
    // this.store.dispatch({type: '[Product List] Load'});
    // this.route.data
    //   .subscribe(
    //     (products) => {
    //       this.products = products.productList;
    //     }
    //   );
  }

  ngOnDestroy(): void {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
