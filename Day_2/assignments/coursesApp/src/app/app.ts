import { Component, signal } from '@angular/core';
import { CoursesComponent } from './courses/courses';

@Component({
  selector: 'app-root',
  imports: [CoursesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coursesApp');
}
