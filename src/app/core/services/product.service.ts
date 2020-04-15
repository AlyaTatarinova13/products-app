import {Injectable} from '@angular/core';
import {products} from '../fakeBackend/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {
  }

  getProduct(index) {
    return products[index];
  }
}

