import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from '../model/product';

@Component({
  selector: 'app-layout-componente',
  templateUrl: './layout-componente.component.html',
  styleUrls: ['./layout-componente.component.scss']
})
export class LayoutComponenteComponent implements OnInit {

  producto: string;
  detalles: Producto;

  constructor() { }

  ngOnInit(): void {
    this.producto = 'destacado';
  }

  mostrarDestacados() {
    this.producto = 'destacado';
  }

  mostrarSubasta() {
    this.producto = 'subasta';
  }

  recibir(e) {
    this.detalles = e;
  }
}
