import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponenteComponent } from './layout-componente/layout-componente.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StoreInfoComponent } from './store-info/store-info.component';
import { StoresAuctionListComponent } from './stores-auction-list/stores-auction-list.component';
import { FilterByShopPipe } from './pipes/filter-by-shop.pipe';
import { ProductsServiceService } from './services/products-service.service';
import { DestacadosProductsServiceService } from './services/destacados-products-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponenteComponent,
    ProductListComponent,
    ProductDetailComponent,
    StoreInfoComponent,
    StoresAuctionListComponent,
    FilterByShopPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProductsServiceService,
    DestacadosProductsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
