import {Component, OnInit} from '@angular/core';
import {Topic} from '../topic';
import {ActivatedRoute, Router} from '@angular/router';
import {TopicService} from '../topic.service';

@Component({
  selector: 'app-update-topic',
  templateUrl: './update-topic.component.html',
  styleUrls: ['./update-topic.component.css']
})
export class UpdateTopicComponent implements OnInit {

  id: string;
  topic: Topic;
  submitted = false;

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

  updateTopic() {
    this.topicService.updateTopic(this.id, this.topic)
      .subscribe(data => console.log(data), error => console.log(error));
    this.topic = new Topic();
    this.gotoList();
  }

  onSubmit() {
    this.updateTopic();
  }

  gotoList() {
    this.router.navigate(['/topics']);
  }

}
