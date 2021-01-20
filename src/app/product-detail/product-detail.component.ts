import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  detailProd: Producto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
