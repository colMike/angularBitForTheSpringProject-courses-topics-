import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private baseUrl = 'http://localhost:8080/topics';

  constructor(private http: HttpClient) {
  }

  getTopicList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getTopic(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTopic(topic: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, topic);
  }

  updateTopic(id: string, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTopic(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }


}
