import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // products = products;
  products;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data
      .subscribe(
        (products ) => {
          this.products = products.productList;
        }
      );
  }
}
