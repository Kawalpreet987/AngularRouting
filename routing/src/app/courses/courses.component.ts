import { Component } from '@angular/core';
import { CoursesService } from '../Service/Course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  constructor(private courseService: CoursesService) {}
  courses: any = [];
  ngOnInit() {
    this.courses = this.courseService.courses;
  }
}
