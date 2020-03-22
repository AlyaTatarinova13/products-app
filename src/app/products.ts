import {ProductModel} from './core/models/Product';
import {AvailableColors} from './core/models/AvailableColors';

export const products: ProductModel[] = [
  {
    name: 'Phone XL',
    description: 'A large phone with one of the best screens',
    count: null,
    price: '799',
    // colors: [AvailableColors.Red, AvailableColors.Green, AvailableColors.Black],
    colorModels: [{color: AvailableColors.Yellow, count: 0}, {color: AvailableColors.Green, count: 3}]
  },
  {
    name: 'Phone Mini',
    description: 'A great phone with one of the best cameras',
    count: null,
    price: '699',
    // colors: [AvailableColors.Red, AvailableColors.White],
    colorModels: [{color: AvailableColors.Black, count: 1}, {color: AvailableColors.White, count: 3}, {
      color: AvailableColors.Green,
      count: 5
    }]
  },
  {
    name: 'Phone Standard',
    description: 'Description of phone',
    count: null,
    price: '299',
    // colors: [AvailableColors.Green, AvailableColors.Yellow],
    colorModels: [{color: AvailableColors.Black, count: 2}]
  }
];
