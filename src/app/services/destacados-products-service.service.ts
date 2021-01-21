import { Injectable } from '@angular/core';
import { Featured } from '../data/featured';

@Injectable({
  providedIn: 'root'
})
export class DestacadosProductsServiceService {

  listaProdDest = Featured;

  constructor() { }
}
