import {Injectable} from '@angular/core';
import {products} from '../fakeBackend/products';
import {ProductModel} from '../models/Product';
import {ValueChangeCount} from '../../product-color-item/product-color-item.component';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  startCount: number;
  aTest: number[] = [];
  private dataCount = new BehaviorSubject<Array<number>>([]);
  count = this.dataCount.asObservable();

  constructor() {
  }

  getProduct(index) {
    return products[index];
  }

  initCount(product: ProductModel) {
    this.startCount = 0;
    for (let i = 0; i < product.colorModels.length; i++) {
      this.startCount += product.colorModels[i].count;
    }
    console.log('this.productId', product.id);
    console.log('initCount: ', this.startCount);
    (this.aTest)[product.id] = this.startCount;
    this.dataCount.next(this.aTest);
  }

  changeCountPlus(productId: number) {
    console.log('this.productId', productId);
    console.log('this.aTest[productId]', this.aTest[productId]);
    this.aTest[productId]++;
    console.log('this.aTest[productId]++', this.aTest[productId]);
    this.dataCount.next(this.aTest);
  }

  changeCountMinus(productId: number) {
    console.log('this.productId', productId);
    console.log('this.aTest[productId]', this.aTest[productId]);
    this.aTest[productId]--;
    console.log('this.aTest[productId]--', this.aTest[productId]);
    this.dataCount.next(this.aTest);
  }
}

