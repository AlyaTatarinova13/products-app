import {Injectable} from '@angular/core';
// import {products} from '../fakeBackend/products';
import {HttpClient} from '@angular/common/http';

import {ProductModel} from '../models/Product';
import {BehaviorSubject, of, Observable} from 'rxjs';
import {SidebarItem} from '../models/SidebarItems';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  arrayCounts: number[] = [];
  private dataCount = new BehaviorSubject<Array<number>>([]);
  count = this.dataCount.asObservable();

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<ProductModel> {
    console.log('From product service:');
    this.http.get<Array<ProductModel>>(`productList`).pipe().subscribe({
      next: console.log
    });
    return this.http.get<ProductModel>(`productList`);
  }

  // getProduct(index) {
  //   return products[index];
  // }

  initCount(product: ProductModel): Observable<number> {
    let startCount = 0;
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

