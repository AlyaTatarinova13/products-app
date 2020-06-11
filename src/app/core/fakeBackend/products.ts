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
    name: 'Samsung X',
    price: 3099,
    count: null,
    description: '',
    colorModels: [{color: AvailableColors.Green, count: 5}]
  },
  {
    id: 4,
    name: 'Nokia 3310',
    price: 99,
    count: null,
    description: 'A large phone with one of the best screens',
    colorModels: [{color: AvailableColors.White, count: 2}, {color: AvailableColors.Red, count: 1}]
  },
  {
    id: 5,
    name: 'Meizu m2 Mini',
    price: 390,
    count: null,
    description: 'A great phone with one of the best cameras',
    colorModels: [{color: AvailableColors.White, count: 6}, {color: AvailableColors.Green, count: 3}, {
      color: AvailableColors.Red, count: 5 }]
  },
  {
    id: 6,
    name: 'Phone Standard',
    price: 978,
    count: null,
    description: '',
    colorModels: [{color: AvailableColors.Black, count: 4}]
  },
  {
    id: 7,
    name: 'Phone Great',
    price: 90000,
    count: null,
    description: '',
    colorModels: [{color: AvailableColors.White, count: 8}]
  }
];
