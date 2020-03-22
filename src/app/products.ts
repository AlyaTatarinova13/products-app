import {ProductModel} from './core/models/Product';
import {AvailableColors} from './core/models/AvailableColors';

export const products: ProductModel[] = [
  {
    Name: 'Phone XL',
    Description: 'A large phone with one of the best screens',
    Count: 3,
    Price: '799',
    Colors: [AvailableColors.Red, AvailableColors.Green, AvailableColors.Black]
  },
  {
    Name: 'Phone Mini',
    Description: 'A great phone with one of the best cameras',
    Count: 3,
    Price: '699',
    Colors: [AvailableColors.Red, AvailableColors.White]
  },
  {
    Name: 'Phone Standard',
    Description: 'Description of phone',
    Count: 3,
    Price: '299',
    Colors: [AvailableColors.Green, AvailableColors.Yellow]
  }
];
