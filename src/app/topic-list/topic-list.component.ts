import {Component, OnInit} from '@angular/core';
import {TopicService} from '../topic.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Topic} from '../topic';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topics: Observable<Topic[]>;

  constructor(private topicService: TopicService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.topics = this.topicService.getTopicList();
  }

  deleteTopic(id: any) {
    this.topicService.deleteTopic(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
  }

  topicDetails(id: any) {
    this.router.navigate(['details', id]);
  }

}
