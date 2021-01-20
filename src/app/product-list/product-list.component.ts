import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  listProd: Producto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
