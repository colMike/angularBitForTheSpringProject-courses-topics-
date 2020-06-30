import {Component, OnInit} from '@angular/core';
import {CourseService} from '../course.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Course} from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Observable<Course[]>;

  topicId = 'python-flask';

  constructor(private courseService: CourseService, private router: Router) {
  }


  ngOnInit(): void {
    this.reloadData(this.topicId);
  }

  reloadData(topicId: any) {
    this.courses = this.courseService.getCourseList(topicId);
  }

  deleteCourse(topicId: any, courseId: any) {
    this.courseService.deleteCourse(topicId, courseId)
      .subscribe(data => {
          console.log(data);
          this.reloadData(topicId);
        },
        error => console.log(error)
      );
  }

  courseDetails(topicId: any, courseId: any) {
    this.router.navigate(['topics', topicId, 'courses', 'details', courseId]);
  }


  updateCourse(courseId: string, topicId: string) {
    this.router.navigate(['topics', topicId, 'courses', 'update', courseId]);
  }
}
