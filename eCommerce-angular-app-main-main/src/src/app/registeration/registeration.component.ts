import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../interface/users';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  //user: Users;
  //users: Array <Users> = new Array <Users>();
  public signupForm!: FormGroup;
  
//constructor(private userService: UsersService, private router: Router){}
  

constructor(private formBuilder: FormBuilder, private http: HttpClient,private router: Router){}


ngOnInit(): void {
  this.signupForm = this.formBuilder.group({
    nom: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z]*$/), Validators.minLength(5)]],
    prenom: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z]*$/), Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5),Validators.pattern(/^[0-9a-zA-Z]{8,10}$/)]]
  });
}

signUp() {
  if (this.signupForm.valid) {
    this.http.post<Users>("http://localhost:3000/Users", this.signupForm.value).subscribe(res => {
      alert("utilisateur ajouté(e)");
      this.signupForm.reset();
      this.router.navigate(['/login']);
    });
  } else {
    alert("Please correct the form errors.");
  }
}
}