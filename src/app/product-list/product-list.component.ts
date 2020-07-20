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
export class ProductListComponent implements OnInit {
  productList$: Observable<Array<ProductModel>>;

  constructor(private store: Store<RootState>) { // private route: ActivatedRoute,
    this.productList$ = this.store.pipe(select(selectProductList));
      // tap(val => console.log('from product component', val)));
  }

  ngOnInit(): void {
    this.store.dispatch(productListLoad());
  }
}
