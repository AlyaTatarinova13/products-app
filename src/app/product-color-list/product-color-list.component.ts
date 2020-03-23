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
  @Output() changeCount = new EventEmitter<ValueChangeCount>();

  constructor() {
  }

  ngOnInit(): void {
  }

  recalculateProductModelCount(e) {
    this.changeCount.emit(e);
  }

}
