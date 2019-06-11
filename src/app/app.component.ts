import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stada: string;

  receiveData($event) {
    this.stada = $event;
    console.log(this.stada);
  }
}
