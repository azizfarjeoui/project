import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  productOfCart: any;

  ngOnInit() {
    this.onInit();
  }

  onInit() {
    this.productOfCart = JSON.parse(localStorage.getItem('cartItems') || 'null');
    console.log(this.productOfCart)
  }
  delete(index: number) {
    this.productOfCart.splice(index, 1);}
    // You can also update the local storage here if needed




}

