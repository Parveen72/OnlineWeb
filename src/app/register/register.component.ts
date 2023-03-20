import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var NgForm:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
  }
  registerForm!: FormGroup;
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      tnc: ['', Validators.required]
    });
    
    }
    
     get fval() {
     return this.registerForm.controls;
     }
     
     signup(){
     this.submitted = true;
     if (this.registerForm.invalid) {
     return;
     }
     alert('form fields are validated successfully!');
     }
   }
