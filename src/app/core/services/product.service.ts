import {Injectable} from '@angular/core';
import {products} from '../fakeBackend/products';
import {ProductModel} from '../models/Product';
import {ValueChangeCount} from '../../product-color-item/product-color-item.component';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {
  }

  getProduct(index) {
    return products[index];
  }

  initCount(product: ProductModel) {
    let count = 0;

    for (let i = 0; i < product.colorModels.length; i++) {
      count += product.colorModels[i].count;
    }
    // console.log('initCount: ', count);
    return of(count);
  }

  changeCount(e, productCount) {
    if (e === ValueChangeCount.Plus) {
      productCount++;
    } else {
      productCount--;
    }
    return productCount;
  }
}

