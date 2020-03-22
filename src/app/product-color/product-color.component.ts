import {Component, Input, OnInit} from '@angular/core';
import {AvailableColors} from '../core/models/AvailableColors';

@Component({
  selector: 'app-product-color',
  templateUrl: './product-color.component.html',
  styleUrls: ['./product-color.component.scss']
})
export class ProductColorComponent implements OnInit {
  @Input() colorProduct: string;
  constructor() {
  }

  ngOnInit(): void {
  }

  getColor() {
    return this.colorProduct;
  }

}
