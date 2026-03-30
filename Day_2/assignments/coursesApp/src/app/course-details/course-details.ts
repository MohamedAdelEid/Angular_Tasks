import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Course } from '../models/course.model';
import { DiscountPipe } from '../pipes/discount.pipe';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-details',
  imports: [CommonModule, RouterLink, DiscountPipe],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetailsComponent {
  course?: Course;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly coursesService: CoursesService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = this.coursesService.getCourseByID(id);
  }
}
