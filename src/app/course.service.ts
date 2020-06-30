import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:8080/topics';

  constructor(private http: HttpClient) {
  }

  getCourseList(topicId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${topicId}/courses`);
  }

  getCourse(topicId: string, courseId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${topicId}/courses/${courseId}`);
  }

  createCourse(topicId: string, course: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${topicId}/courses`, course);
  }

  updateCourse(topicId: string, courseId: string, course: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${topicId}/courses/${courseId}`, course);
  }

  deleteCourse(topicId: string, courseId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${topicId}/courses/${courseId}`, {responseType: 'text'});
  }

}
