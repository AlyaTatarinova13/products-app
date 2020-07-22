import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../core/models/Product';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectProductList} from '../core/store/product/product.selector';
import {tap} from 'rxjs/operators';
import {productListLoad, sortByName, sortByPopularity, sortByPrice} from '../core/store/product/product.actions';
import {ProductState} from '../core/store/product/product.reducers';
import {updateSortDatas} from '../core/store/sortData/sort-data.actions';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList$: Observable<Array<ProductModel>>;

  constructor(private store: Store<ProductState>) { // private route: ActivatedRoute,
    this.productList$ = this.store.pipe(select(selectProductList),
      tap(val => console.log('from product component', val)));
  }

  ngOnInit(): void {
    this.store.dispatch(productListLoad());
    this.store.dispatch(updateSortDatas({data: 0}));
  }

  sortByPrice(): void {
    this.store.dispatch(sortByPrice());
    this.store.dispatch(updateSortDatas({data: 0}));
  }

  sortByName(): void {
    this.store.dispatch(sortByName());
    this.store.dispatch(updateSortDatas({data: 1}));
  }

  sortByPopularity(): void {
    this.store.dispatch(sortByPopularity());
    this.store.dispatch(updateSortDatas({data: 2}));
  }
}
