import { Component, model, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, NgForm } from '@angular/forms';

export interface FormModel {
  isNegotiable: Boolean,
  same: "Electric" | "Petrol" | "Diesal" | "Hybrid",
  vehicaltitle: String,
  vinnumber: number,
  price:number
}
@Component({
  imports: [FormsModule],
  standalone: true,
  selector: 'app-assignment-one',
  styleUrl: './assignment-one.css',
  templateUrl: './assignment-one.html',
})
export class AssignmentOne {
  @ViewChild('vehicalRegistation') vehicalForm!: NgForm;

  formmodel: FormModel = {
    isNegotiable : false,
    same:'Diesal',
    vehicaltitle: '',
    vinnumber: 0,
    price:0
  }
  myButton:Boolean=true;

  isFildIsValid(par:String):boolean{
  const cvarianl = this.vehicalForm?.control?.[par];
  return ( cvarianl && cvarianl.invalid && (cvarianl.dirty || cvarianl.touched ))
  }
  
  onSubmit(vehicalregi: NgForm) {
  
    if(this.vehicalForm.invalid){
      console.log(this.vehicalForm);
      this.vehicalForm.control.markAllAsTouched();

    }
  }
}
