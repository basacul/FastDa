import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stada } from '../interface/Stada';
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
    console.log("Search for: ", form.value.searchString);
    if (form.value.searchString && form.value.searchString.trim()) {
      this.stadaService.getStada(form.value.searchString.trim()).subscribe(response => {
        // TODO: an interface needs to be implemented to handle the response data format
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
  sendStadaId(id: string) {
    this.searchEvent.emit(id);
  }

}
