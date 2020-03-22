import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColorModel} from '../core/models/Product';

@Component({
  selector: 'app-product-color-item',
  templateUrl: './product-color-item.component.html',
  styleUrls: ['./product-color-item.component.scss']
})
export class ProductColorItemComponent implements OnInit {

  @Input()
  productColorItem: ColorModel;

  @Output() changeCount = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickPlus() {
    this.changeCount.emit(true);
    this.productColorItem.count++;
  }

  onClickMinus() {
    if (this.productColorItem.count > 0) {
      this.changeCount.emit(false);
      this.productColorItem.count--;
    }
  }

  getColor() {
    return this.productColorItem.color;
  }
}
