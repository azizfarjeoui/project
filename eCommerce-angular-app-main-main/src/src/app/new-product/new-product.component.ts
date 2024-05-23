import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{
  public productForm!: FormGroup;
  constructor(private formBuilder:FormBuilder,private productService:ProductsService){

  }
  ngOnInit(): void {
    this.productForm=this.formBuilder.group({
      title:[''],
      description :[''],
      price :[''],
      discountPercentage:[''],
      rating:[''],
      stock:[''],
      brand:[''],
      images:[''],
      category:[''],
      id:[''],
      });
  }
  ajouterProduct(){
    alert("ajouter")
    this.productService.addProduct(this.productForm.value).subscribe((data)=>{
      console.log(data);
      
    })
  }
  
  }

