import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Featured } from '../data/featured';
import { Items } from '../data/items';
import { Producto } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  listaProdDest = Featured;
  listaProdSub = Items;
  @Input() producto;

  @Output() detalles = new EventEmitter<Producto>(null);

  constructor() { }

  ngOnInit(): void {
  }

  emitDetalle(producto: Producto): void {
    this.detalles.emit(producto);
  }
}
