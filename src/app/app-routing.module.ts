import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: '',redirectTo:'product-list', pathMatch:"full"},
  {path: 'product-list',component:ProductListComponent},
  {path: 'product-item',component:ProductItemComponent},
  {path: 'product-detail',component:ProductItemDetailComponent},
  {path: 'cart',component:CartComponent},
  {path: '**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
