import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  seats: number;
  image: string;
  catId: number;
  category: 'Programming' | 'Design' | 'Marketing' | 'Business';
}

@Component({
  selector: 'app-courses',
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class CoursesComponent {
  selectedCategory: 'All' | Course['category'] = 'All';

  courses: Course[] = [
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

  get categories(): Array<'All' | Course['category']> {
    const unique = Array.from(new Set(this.courses.map((c) => c.category)));
    return ['All', ...unique];
  }

  get filteredCourses(): Course[] {
    if (this.selectedCategory === 'All') return this.courses;
    return this.courses.filter((c) => c.category === this.selectedCategory);
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
