import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

import { ShopReducer } from './store/reducer';
import { ShopEffects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductListComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    StoreModule.forRoot({ shop: ShopReducer }),
    EffectsModule.forRoot([ShopEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
