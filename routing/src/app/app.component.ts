import { Component } from '@angular/core';
import { CoursesService } from './Service/Course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CoursesService]
})
export class AppComponent {
  title = 'routing';
}
