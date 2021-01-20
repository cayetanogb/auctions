import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponenteComponent } from './layout-componente/layout-componente.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StoresInAuctionComponent } from './stores-in-auction/stores-in-auction.component';
import { StoreInfoComponent } from './store-info/store-info.component';
import { StoresAuctionListComponent } from './stores-auction-list/stores-auction-list.component';
import { FilterByShopPipe } from './pipes/filter-by-shop.pipe';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponenteComponent,
    ProductListComponent,
    ProductDetailComponent,
    StoresInAuctionComponent,
    StoreInfoComponent,
    StoresAuctionListComponent,
    FilterByShopPipe,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
