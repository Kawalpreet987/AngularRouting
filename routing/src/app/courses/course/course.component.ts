import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Service/Course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  course: any;
  courseId: any;
  editMode: boolean = false;
  constructor(
    private activateRoute: ActivatedRoute,
    private courseService: CoursesService,
    private router: Router
  ) {}
  ngOnInit() {
    //Snapshot does not give us the updated params.
    // this.courseId = this.activateRoute.snapshot.paramMap.get('id');
    // this.course = this.courseService.courses.find(
    //   (c: any) => c.id == this.courseId
    // );
    //For updated param we have o use observable
    this.activateRoute.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = this.courseService.courses.find(
        (c) => c.id == this.courseId
      );
    });
    this.activateRoute.queryParamMap.subscribe((query)=>{
      this.editMode = Boolean(query.get("edit"))
    })
  }
  onEdit() {
    this.router.navigate(['/Courses/Course', this.courseId], {
      queryParams: { edit: true },
    });
    this.editMode= true
  }
}
