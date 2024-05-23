import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { Guard } from './guard/guard';
import {CanActivate} from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';

const routes : Routes = [
  { 
    path: '', 
    redirectTo: 'products', 
    pathMatch: 'full'
   },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registeration',
    component: RegisterationComponent
  },
  {
    path: 'productDetails/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'Cart',
    component: CartComponent,
    canActivate: [Guard]
    
  },
  {
    path: 'new-product',
    component: NewProductComponent,
    canActivate: [Guard]
    
  },
  {
    path: '**',
    component: NotFoundComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  
 }
