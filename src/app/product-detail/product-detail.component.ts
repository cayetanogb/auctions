import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() imageUrl;
  @Input() title;
  @Input() description;
  @Input() price;

  constructor() { }

  ngOnInit(): void {
  }

}
