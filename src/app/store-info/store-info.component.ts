import { Component, Input, OnInit } from '@angular/core';
import { Store } from '../model/store';

@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.scss']
})
export class StoreInfoComponent implements OnInit {

  @Input() tienda: Store;

  constructor() { }

  ngOnInit(): void {
  }

}
