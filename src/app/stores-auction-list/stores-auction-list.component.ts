import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '../model/store';
import { ProductsServiceService } from '../services/products-service.service';

@Component({
  selector: 'app-stores-auction-list',
  templateUrl: './stores-auction-list.component.html',
  styleUrls: ['./stores-auction-list.component.scss']
})
export class StoresAuctionListComponent implements OnInit {

  tiendas: Store[]=[];
  listaProdSub;
  clicado: boolean = false;

  @Output() enviar = new EventEmitter<Store>(null);

  constructor(private listaSubasta: ProductsServiceService) {
    this.listaProdSub = this.listaSubasta.subasta;

    for (let i = 0; i < this.listaProdSub.length; i++) {
      let repe: Boolean = false;

      if (this.tiendas.length > 0) {

        for (let j = 0; j < this.tiendas.length; j++) {

          if (this.listaProdSub[i].storeName == this.tiendas[j].storeName) {
            repe = true;
          }  
        }

        if (!repe) {
          let tienda = {
            storeName: this.listaProdSub[i].storeName,
            storeAvatarUrl: this.listaProdSub[i].storeAvatarUrl,
            storeDescription: this.listaProdSub[i].storeDescription
          }
  
          this.tiendas.push(tienda);
        }

      } else {
        let tienda = {
          storeName: this.listaProdSub[i].storeName,
          storeAvatarUrl: this.listaProdSub[i].storeAvatarUrl,
          storeDescription: this.listaProdSub[i].storeDescription
        }

        this.tiendas.push(tienda);
      }
    }
  }

  ngOnInit(): void {
  }

  emitTienda(tienda: Store) {
    this.enviar.emit(tienda);
    this.clicado = true;
  }
}
