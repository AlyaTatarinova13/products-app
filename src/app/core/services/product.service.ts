import {Injectable} from '@angular/core';
// import {products} from '../fakeBackend/products';
import {HttpClient} from '@angular/common/http';

import {ProductModel} from '../models/Product';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Update} from '@ngrx/entity';
import {AvailableColors} from '../models/AvailableColors';
import {filter, find, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  arrayCounts: number[] = [];
  private dataCount = new BehaviorSubject<Array<number>>([]);
  count = this.dataCount.asObservable();

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Array<ProductModel>> {
    console.log('Load all products from service:');
    // this.http.get<Array<ProductModel>>(`productList`).pipe().subscribe({
    //   next: console.log
    // });
    return this.http.get<Array<ProductModel>>(`productList`);
  }

  updateNameProduct(updatingProduct: ProductModel): Observable<Update<ProductModel>> {
    // let product = updatingProduct;
    // product.name = 'New Phone Model';
    console.log('Updated product name from service: ', updatingProduct);
    const updatedProduct: Update<ProductModel> = {
      id: 3,
      changes: {name: 'New Mobile Name'}
    };
    return of(updatedProduct);
    // console.log('update from service: ', this.http.get<ProductModel>('productList').pipe(
    //   find((product: ProductModel) => product.id === id)));
    // return this.http.get<ProductModel>('productList').pipe(
    //   tap(product => console.log('service updating:', product.id)),
    //   map(product => product.name = ));
    // const updatedProduct: Update<ProductModel> = {
    //   id: 3,
    //   changes: {
    //     id: 3,
    //     name: 'New Mobile Name',
    //     price: 3099,
    //     count: null,
    //     description: '',
    //     colorModels: [
    //       {
    //         color: AvailableColors.Yellow,
    //         count: 0
    //       },
    //       {
    //         color: 'Green',
    //         count: 3
    //       }
    //     ]
    //   }
    // };
    // return this.http.get<ProductModel>('productList');
    // return of(updatedProduct);
  }


  // getProduct(index) {
  //   return products[index];
  // }

  initCount(product: ProductModel): Observable<number> {
    const startCount = 0;
    // for (let i = 0; i < product.colorModels.length; i++) {
    //   startCount += product.colorModels[i].count;
    // }
    // this.arrayCounts[product.id] = startCount;
    // this.dataCount.next(this.arrayCounts);
    return of(startCount);
  }

  changeCountPlus(productId: number) {
    this.arrayCounts[productId]++;
    this.dataCount.next(this.arrayCounts);
  }

  changeCountMinus(productId: number) {
    this.arrayCounts[productId]--;
    this.dataCount.next(this.arrayCounts);
  }
}

