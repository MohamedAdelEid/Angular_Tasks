import { Routes } from '@angular/router';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { CourseDetailsComponent } from './course-details/course-details';
import { CoursesComponent } from './courses/courses';
import { HomeComponent } from './home/home';
import { NotFoundComponent } from './not-found/not-found';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: CourseDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
