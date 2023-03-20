import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  bankForm!: FormGroup;  
  submitted = false;

  constructor() { }

  ngOnInit(): void {
   
  }
  createForm(){
    this.bankForm = new FormGroup({
      'account_Holder_name':new FormControl('', [Validators.required]),
      'Bank':new FormControl('SBI',[Validators.required]),
      'Account_No.':new FormControl('',[Validators.required]),
      'IFSC_Code':new FormControl('',[Validators.required]),
    })
  }
  get fval() {
    return this.bankForm.controls;
    }
    
    signup(){
    this.submitted = true;
    if (this.bankForm.invalid) {
    return;
    }
    alert('form fields are validated successfully!');
    }
}
