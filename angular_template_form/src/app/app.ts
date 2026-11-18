import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AssignmentOne } from './components/assignment-one/assignment-one';

@Component({
  imports: [RouterOutlet, AssignmentOne],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular_template_form');
}
