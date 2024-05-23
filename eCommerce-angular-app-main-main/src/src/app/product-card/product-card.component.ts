import { Component, Input } from '@angular/core';
import { Product } from '../interface/product';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  cartArray: any[] = []; // Create a separate array for each component instance
  
  constructor(private router: Router) {}

  redirectToDetails(id: Number) {
    this.router.navigate(['productDetails', id]);
  }

  addToCart(product: any) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems') || 'null') || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log(cartItems)
  }
}