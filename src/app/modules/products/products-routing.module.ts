import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'product',
        pathMatch: 'full',
        component: ProductComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'product',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }