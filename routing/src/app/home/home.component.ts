import { Component } from '@angular/core';
import { CoursesService } from '../Service/Course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private courseService: CoursesService) {}
  courses: any = [];
  ngOnInit() {
    this.courses = this.courseService.courses;
  }
}
