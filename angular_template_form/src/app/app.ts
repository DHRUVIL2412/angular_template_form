import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AssignmentOne } from './components/assignment-one/assignment-one';
import { SimpleFrom } from './simple-from/simple-from';
import { ProductMain } from './productHandler/product-main/product-main';

@Component({
  imports: [ ProductMain],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular_template_form');
}
