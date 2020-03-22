import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColorModel} from '../core/models/Product';

@Component({
  selector: 'app-product-color-list',
  templateUrl: './product-color-list.component.html',
  styleUrls: ['./product-color-list.component.scss']
})
export class ProductColorListComponent implements OnInit {
  // @Input() colors = Colors;
  public count = 0;
  @Input() productColors: ColorModel[];
  @Output() changeCount = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  recalculateProductModelCount(e) {
    this.changeCount.emit(e);
  }

}
