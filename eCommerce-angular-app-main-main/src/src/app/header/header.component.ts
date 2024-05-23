import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(){
    
  }
  isAdmin:boolean=false;
  ngOnInit(): void {
    if(localStorage.getItem("isAdmin")=="true"){
      this.isAdmin=true;
    }
  }
  logout() {
  
    localStorage.clear();
  }
  
}
