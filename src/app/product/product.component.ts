import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../core/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  @Input() productId: number;
  constructor() { }

  ngOnInit(): void {
  }

  share() {
    window.alert('The product has been shared');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
