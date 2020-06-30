import {Component, OnInit} from '@angular/core';
import {Course} from '../course';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  topicId: string;
  courseId: string;
  course: Course;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.course = new Course();

    this.courseId = this.route.snapshot.params.id;

    this.courseService.getCourse(this.topicId, this.courseId)
      .subscribe(data => {
        console.log(data);
        this.course = data;
      }, error => console.log(error));
  }

  updateCourse() {
    this.courseService.updateCourse(this.topicId, this.courseId, this.course)
      .subscribe(data => console.log(data), error => console.log(error));
    this.course = new Course();
    this.gotoList();
  }

  onSubmit() {
    this.updateCourse();
  }

  gotoList() {
    this.router.navigate(['/courses']);
  }

}
