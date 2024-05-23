import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { Route, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Array<Product> = []
  
  constructor(private router: Router,private productService:ProductsService) {}
  ngOnInit(): void {
    this.productService.getAll().subscribe((data)=>{
      this.products=data;
      console.log(data)
      if(localStorage.getItem("isAdmin")=="true"){
        this.isAdmin=true;
      }
    })
  }
  redirectToDetailCart(){
    this.router.navigate(['Cart'])
  }




  product!: Product;
  cartArray: any[] = []; // Create a separate array for each component instance
  
  

    isAdmin:boolean=false;
   
    logout() {
    
      localStorage.clear();
    }
 

  redirectToDetails(id: Number) {
    this.router.navigate(['productDetails', id]);
  }

  addToCart(product: Product) {
    // Vérifie si l'utilisateur est connecté
    const isConnected = Boolean(localStorage.getItem('isConnected'));
  
    if (isConnected) {
      // Si connecté, ajoute le produit au panier
      let cartItems: Product[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
      cartItems.push(product);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      console.log(cartItems);
    } else {
      // Si non connecté, redirige vers la page de connexion
      this.router.navigate(['/login']);
      // OU affiche un message d'erreur sans ajouter au panier
      // Vous pouvez utiliser une bibliothèque de notification comme ngx-toastr
      // Par exemple : this.toastr.warning('Veuillez vous connecter pour ajouter des articles au panier.');
    }
  }

  delete(product:Product,index:number)
  {
this.productService.deleteProduct(product).subscribe (res =>{this.products.splice(index,1)})


  }
}
