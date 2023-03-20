import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string="";
password:string="";
  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit(data:any){
    if(this.username == 'parvin' && this.password == 'abc@123'){
    console.log("Success");}
    else{
    console.log('SOrry!');
    }
    
    
  }
}
