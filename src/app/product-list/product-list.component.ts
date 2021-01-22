import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../model/product';
import { DestacadosProductsServiceService } from '../services/destacados-products-service.service';
import { ProductsServiceService } from '../services/products-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  listaProdDest;
  listaProdSub;
  @Input() producto;

  @Output() detalles = new EventEmitter<Producto>(null);

  constructor(private listaSubasta: ProductsServiceService, private listaDestacado: DestacadosProductsServiceService) {
    this.listaProdDest = this.listaDestacado.destacado;
    this.listaProdSub = this.listaSubasta.subasta;
  }

  ngOnInit(): void {
  }

  emitDetalle(producto: Producto, e): void {
    this.detalles.emit(producto);
    e.preventDefault();
  }
}
