import {AvailableColors} from '../models/AvailableColors';
import {ProductModel} from '../models/Product';

export const products: ProductModel[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    count: null,
    description: 'A large phone with one of the best screens',
    colorModels: [{color: AvailableColors.Yellow, count: 0}, {color: AvailableColors.Green, count: 3}]
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    count: null,
    description: 'A great phone with one of the best cameras',
    colorModels: [{color: AvailableColors.Black, count: 1}, {color: AvailableColors.White, count: 3}, {
      color: AvailableColors.Green,
      count: 5
    }]
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    count: null,
    description: '',
    colorModels: [{color: AvailableColors.Black, count: 2}]
  }
];
