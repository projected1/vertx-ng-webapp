import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: 0;

  constructor(private http: Http) {
    setInterval(() => { this.updateCounter(); }, 1000);
  }

  updateCounter() {
    this.http.get('http://18.221.177.61:8080/api/clicks/get-count')
      .subscribe((res: Response) => {
        this.counter = res.json().clickCount;
    });
  }
}
