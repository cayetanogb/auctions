import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../model/product';
import { Store } from '../model/store';

@Component({
  selector: 'app-layout-componente',
  templateUrl: './layout-componente.component.html',
  styleUrls: ['./layout-componente.component.scss']
})
export class LayoutComponenteComponent implements OnInit {

  producto: string;
  detalles: Producto;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  tiendaInfo: Store = null;

  constructor() { }

  ngOnInit(): void {
    this.producto = 'destacado';
  }

  mostrarDestacados(e) {
    this.producto = 'destacado';
    e.preventDefault();
  }

  mostrarSubasta(e) {
    this.producto = 'subasta';
    e.preventDefault();
  }

  recibir(e) {
    this.detalles = e;
  }

  recibeTienda(e) {
    this.tiendaInfo = e;
  }
}
