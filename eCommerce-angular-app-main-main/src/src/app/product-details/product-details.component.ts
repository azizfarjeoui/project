import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  public id !: string | null;
  product :Product[]=[]
  constructor(private route: ActivatedRoute,private ps:ProductsService) {}
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== null) {
      
      this.ps.getProduct(this.id).subscribe((data)=>{
        this.product=data;
        
      })
    }
  }
  
 
}
