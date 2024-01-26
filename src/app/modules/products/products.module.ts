import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './components/product/product.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    TableModule
  ]
})
export class ProductsModule { }
