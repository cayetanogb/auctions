import { Injectable } from '@angular/core';
import { Items } from '../data/items';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  subasta = Items;

  constructor() { }
}
