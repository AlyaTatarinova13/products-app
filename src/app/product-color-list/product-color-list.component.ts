import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColorModel} from '../core/models/Product';
import {ValueChangeCount} from '../product-color-item/product-color-item.component';

@Component({
  selector: 'app-product-color-list',
  templateUrl: './product-color-list.component.html',
  styleUrls: ['./product-color-list.component.scss']
})
export class ProductColorListComponent implements OnInit {
  @Input() productColors: ColorModel[];
  @Input() productId: number;

  constructor() {
  }

  ngOnInit(): void {
    // console.log('this.productColors: ', this.productColors);
  }
}
