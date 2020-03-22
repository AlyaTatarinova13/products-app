import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../core/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  constructor() { }

  share() {
    window.alert('The product has been shared');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit(): void {
    for (let i = 0; i < this.product.colorModels.length; i++) {
      this.product.count += this.product.colorModels[i].count;
    }
  }

  recalculate(e) {
    if (e) {
      this.product.count++;
    } else {
      this.product.count--;
    }
  }
}
