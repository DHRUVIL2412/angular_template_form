import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-simple-from',
  styleUrl: './simple-from.css',
  templateUrl: './simple-from.html',
})
export class SimpleFrom {
  onSubmit(event : any){
    event.preventDefault();
    console.log(event.target.n.value);
    console.log(event.target.m.value);

  }
}
