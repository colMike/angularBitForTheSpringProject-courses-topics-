import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../course.service';
import {Course} from '../course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  topicId: string;
  courseId: string;
  course: Course;

  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.course = new Course();

    this.topicId = this.route.snapshot.params.topicId;
    this.courseId = this.route.snapshot.params.courseId;

    this.courseService.getCourse(this.topicId, this.courseId)
      .subscribe(data => {
        console.log(data);
        this.course = data;
      }, error => console.log(error));


  }

  list() {
    this.router.navigate(['topics', this.course.topic.id, 'courses']);
  }

}
