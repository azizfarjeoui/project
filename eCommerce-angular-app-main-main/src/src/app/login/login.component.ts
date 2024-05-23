import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../interface/users'; 
import { HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private http:HttpClient){}
  

  erreur=true;
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5),Validators.pattern(/^[0-9a-zA-Z]{8,10}$/)]]
     
      });
    }


    isAuthenticated()  {

      this.http.get<Users[]>("http://localhost:3000/Users").subscribe((res) =>{
        const user=res.some((a:Users) => {
          if( a.email===this.loginForm.value.email && a.password===this.loginForm.value.password) {
              localStorage.setItem('isConnected', 'true');
              
              localStorage.setItem('isAdmin', 'false')
              if(a.isadmin){
                localStorage.setItem('isAdmin', 'true')
              }
              
               this.router.navigateByUrl('/products');
             alert("salem")  
                
            } 
          else {  this.erreur = false; 
            alert("adresse ou mot de passe false ")  

          }
            
            }
            )
            
      })
  }
  

}
