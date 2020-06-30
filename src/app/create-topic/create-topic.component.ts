import {Component, OnInit} from '@angular/core';
import {Topic} from '../topic';
import {TopicService} from '../topic.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent implements OnInit {
  topic: Topic = new Topic();
  submitted = false;

  constructor(private topicService: TopicService, private router: Router) {
  }

  ngOnInit(): void {
  }

  newTopic(): void {
    this.submitted = false;
    this.topic = new Topic();
  }

  save() {
    this.topicService.createTopic(this.topic)
      .subscribe(data => console.log(data), error => console.log(error));
    this.topic = new Topic();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/topics']);
  }

}
