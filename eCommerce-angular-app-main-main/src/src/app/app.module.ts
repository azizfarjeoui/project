import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from '../app/login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { NewProductComponent } from './new-product/new-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterationComponent,
    ProductListComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    CartComponent,
    LogoutComponent,
    NewProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
