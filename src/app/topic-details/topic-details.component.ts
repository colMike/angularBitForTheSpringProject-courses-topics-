import {Component, OnInit} from '@angular/core';
import {Topic} from '../topic';
import {ActivatedRoute, Router} from '@angular/router';
import {TopicService} from '../topic.service';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {

  id: string;
  topic: Topic;

  constructor(private route: ActivatedRoute, private router: Router, private topicService: TopicService) {
  }

  ngOnInit(): void {
    this.topic = new Topic();

    this.id = this.route.snapshot.params.id;

    this.topicService.getTopic(this.id)
      .subscribe(data => {
        console.log(data);
        this.topic = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['topics']);
  }

}
