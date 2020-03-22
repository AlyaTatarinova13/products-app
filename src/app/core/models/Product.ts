import {AvailableColors} from './AvailableColors';

export interface ProductModel {
  name: string;
  description: string;
  count: number;
  price: string;
  colorModels: ColorModel[];
}

export interface ColorModel {
  color: AvailableColors;
  count: number;
}
