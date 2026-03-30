import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly courses: Course[] = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      instructor: 'Ahmed Ali',
      price: 1200,
      seats: 5,
      image: 'https://picsum.photos/seed/angular/600/400',
      catId: 1,
      category: 'Programming',
    },
    {
      id: 2,
      title: 'UI Design Basics',
      instructor: 'Mona Hassan',
      price: 900,
      seats: 2,
      image: 'https://picsum.photos/seed/design/600/400',
      catId: 2,
      category: 'Design',
    },
    {
      id: 3,
      title: 'Digital Marketing 101',
      instructor: 'Omar Samy',
      price: 800,
      seats: 0,
      image: 'https://picsum.photos/seed/marketing/600/400',
      catId: 3,
      category: 'Marketing',
    },
    {
      id: 4,
      title: 'Business Essentials',
      instructor: 'Sara Adel',
      price: 1100,
      seats: 1,
      image: 'https://picsum.photos/seed/business/600/400',
      catId: 4,
      category: 'Business',
    },
    {
      id: 5,
      title: 'TypeScript Mastery',
      instructor: 'Youssef Mahmoud',
      price: 1300,
      seats: 3,
      image: 'https://picsum.photos/seed/typescript/600/400',
      catId: 1,
      category: 'Programming',
    },
  ];

  getAllCourses(): Course[] {
    return this.courses;
  }

  getCoursesByCatID(catID: number): Course[] {
    return this.courses.filter((course) => course.catId === catID);
  }

  getCourseByID(courseID: number): Course | undefined {
    return this.courses.find((course) => course.id === courseID);
  }
}
