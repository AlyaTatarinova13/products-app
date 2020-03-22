import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-color-list',
  templateUrl: './product-color-list.component.html',
  styleUrls: ['./product-color-list.component.scss']
})
export class ProductColorListComponent implements OnInit {
  // @Input() colors = Colors;
  @Input() productColors: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
