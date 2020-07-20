import {AvailableColors} from './AvailableColors';

export interface ProductModel {
  id: number;
  name: string;
  description: string;
  count: number;
  price: number;
  colorModels: ColorModel[];
}

export interface ColorModel {
  color: AvailableColors | string;
  count: number;
}
