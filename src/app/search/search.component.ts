import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stada } from '../interface/stada';
import { StadaService } from '../services/stada/stada.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  // when button clicked, send chosen id to parent
  @Output() searchEvent = new EventEmitter<string>();

  stadas: Stada[];

  constructor(private stadaService: StadaService) { }

  /**
   * Instantiates the searchString, clears the form and performs 
   * the http get request only if searchString is not empty. 
   * @param form NgForm from which searchString is retrieved
   */
  onSubmit(form: NgForm) {
    let searchString = form.value.searchString;

    console.log("Search for: ", searchString);


    if (searchString && searchString.trim()) {
      this.stadaService.getStada(form.value.searchString.trim()).subscribe(response => {
        // TODO: an interface needs to be implemented to handle the response data format that
        //       differs from the actual StaDa data format
        let results: any = response;
        this.stadas = results.result;
      });
    } else {
      // TODO: Inform user to input text
    }
    form.reset();
  }

  /**
   * Passes the string id as number to its parent
   * @param id string from stada entry
   */
  sendStada(id: string, name: string) {
    this.searchEvent.emit(`${id} ${name}`);
  }

}
