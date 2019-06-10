import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FastDa';

  id_from_appsearch: string;

  receiveData($event) {
    this.id_from_appsearch = $event;
  }
}
