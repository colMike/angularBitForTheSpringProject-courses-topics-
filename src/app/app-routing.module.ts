import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopicListComponent} from './topic-list/topic-list.component';
import {TopicDetailsComponent} from './topic-details/topic-details.component';
import {UpdateTopicComponent} from './update-topic/update-topic.component';
import {CreateTopicComponent} from './create-topic/create-topic.component';
import {CourseListComponent} from './course-list/course-list.component';
import {CreateCourseComponent} from './create-course/create-course.component';
import {UpdateCourseComponent} from './update-course/update-course.component';
import {CourseDetailsComponent} from './course-details/course-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'topics', pathMatch: 'full' },
  { path: 'topics', component: TopicListComponent },
  { path: 'add', component: CreateTopicComponent },
  { path: 'update/:id', component: UpdateTopicComponent },
  { path: 'details/:id', component: TopicDetailsComponent },

  { path: 'topics/:topicId/courses', component: CourseListComponent },
  { path: 'topics/:topicId/courses/add', component: CreateCourseComponent },
  { path: 'topics/:topicId/courses/update/:courseId', component: UpdateCourseComponent },
  { path: 'topics/:topicId/courses/details/:courseId', component: CourseDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
