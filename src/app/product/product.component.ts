import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../core/models/Product';
import {ValueChangeCount} from '../product-color-item/product-color-item.component';
import {init} from 'protractor/built/launcher';
import {ProductService} from '../core/services/product.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  @Input() productId: number;


  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.initCount(this.product).subscribe( value => {
      this.product.count = value;
    });
    // console.log(this.productService.initCount(this.product));
    // let productCountObs = new BehaviorSubject(this.productService.initCount(this.product));
    // console.log(productCountObs);
    // productCountObs.subscribe(value => {
    //   console.log('Subscription got', value);
    // });
    // for (let i = 0; i < this.product.colorModels.length; i++) {
    //   this.product.count += this.product.colorModels[i].count;
    // }
  }

  share() {
    window.alert('The product has been shared');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  recalculate(e) {
    this.product.count = this.productService.changeCount(e, this.product.count);
    // this.productCountObs.next(this.productService.changeCount(e, this.productCountObs));
    // this.productService.changeCount(e, productCountObs);
    //   if (e === ValueChangeCount.Plus) {
    //     this.product.count++;
    //   } else {
    //     this.product.count--;
    //   }
    // }
  }
}
