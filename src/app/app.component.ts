import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';
import * as EventBus from 'vertx3-eventbus-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  clickCount: number;

  constructor(private http: Http) {}

  ngOnInit() {
    this.initCounter();
    this.monitorCounter();
  }

  initCounter() {
    this.http.get(environment.baseUrl + '/api/clicks')
      .subscribe((res: Response) => this.clickCount = res.json().clickCount);
  }

  monitorCounter() {
    let eventBus = new EventBus(environment.baseUrl + "/eventbus");
    eventBus.onopen = () => eventBus.registerHandler(
      "counter-feed",
      (err, msg) => this.clickCount = JSON.parse(msg.body).clickCount);
  }
}
