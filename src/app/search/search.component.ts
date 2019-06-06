import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchString: string;

  constructor() { }

  /**
   * Instantiates the searchString, clears the form and performs 
   * the http get request only if searchString is not empty. 
   * @param form NgForm from which searchString is retrieved
   */
  onSubmit(form: NgForm) {
    this.searchString = form.value.searchString.trim();
    form.reset();
    if (this.searchString) {
      console.log(this.searchString);
    }
  }

}
