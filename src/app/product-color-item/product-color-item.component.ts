import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColorModel} from '../core/models/Product';

export enum ValueChangeCount {
  Plus = 'PLUS',
  Minus = 'MINUS'
}

@Component({
  selector: 'app-product-color-item',
  templateUrl: './product-color-item.component.html',
  styleUrls: ['./product-color-item.component.scss']
})
export class ProductColorItemComponent implements OnInit {

  @Input()
  productColorItem: ColorModel;

  @Output() changeCount = new EventEmitter<ValueChangeCount>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickPlus() {
    this.changeCount.emit(ValueChangeCount.Plus);
    this.productColorItem.count++;
  }

  onClickMinus() {
    if (this.productColorItem.count > 0) {
      this.changeCount.emit(ValueChangeCount.Minus);
      this.productColorItem.count--;
    }
  }

  getColor() {
    return this.productColorItem.color;
  }
}
