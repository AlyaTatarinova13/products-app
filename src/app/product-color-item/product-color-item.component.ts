import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColorModel} from '../core/models/Product';
import {ProductService} from '../core/services/product.service';
import {AvailableColors} from '../core/models/AvailableColors';

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
  @Input() productColorItem: ColorModel;
  @Input() productId;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  onClickPlus() {
    this.productService.changeCountPlus(this.productId);
    this.productColorItem.count++;
  }

  onClickMinus() {
    if (this.productColorItem.count > 0) {
      this.productService.changeCountMinus(this.productId);
      this.productColorItem.count--;
    }
  }

  getColor() {
    // let color = this.productColorItem.color;
    // console.log('this.productColorItem.color', color);
    return this.productColorItem.color;
  }
}
