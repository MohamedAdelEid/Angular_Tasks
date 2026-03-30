import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DisableAfterClickDirective } from '../directives/disable-after-click.directive';
import { Category } from '../models/category.model';
import { Course } from '../models/course.model';
import { DiscountPipe } from '../pipes/discount.pipe';
import { CategoriesService } from '../services/categories.service';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  imports: [
    CommonModule,
    FormsModule,
    DiscountPipe,
    DisableAfterClickDirective,
    RouterLink,
  ],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class CoursesComponent {
  selectedCategoryId: number | 'all' = 'all';
  categories: Category[] = [];
  courses: Course[] = [];

  constructor(
    private readonly coursesService: CoursesService,
    private readonly categoriesService: CategoriesService
  ) {
    this.categories = this.categoriesService.getAllCategories();
    this.courses = this.coursesService.getAllCourses();
  }

  get filteredCourses(): Course[] {
    if (this.selectedCategoryId === 'all') return this.courses;
    return this.coursesService.getCoursesByCatID(this.selectedCategoryId);
  }

  register(course: Course): void {
    if (course.seats <= 0) return;
    course.seats -= 1;
  }

  courseBg(course: Course): string {
    if (course.seats === 0) return '#fff5f5';
    if (course.seats <= 2) return '#fffbea';
    return '#ffffff';
  }
}
