import {products} from '../fakeBackend/products';


export class ProductService {
  constructor() {
  }

  getProduct(index) {
    return products[index];
  }
}
