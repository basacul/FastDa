import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StadaService } from '../stada.service';

// simplified data model for stada entry
interface Stada {
  number: number;
  name: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  stadas: Stada[];
  constructor(private stadaService: StadaService) { }

  /**
   * Instantiates the searchString, clears the form and performs 
   * the http get request only if searchString is not empty. 
   * @param form NgForm from which searchString is retrieved
   */
  onSubmit(form: NgForm) {
    if (form.value.searchString && form.value.searchString.trim()) {
      console.log("inside");
      const searchString: string = form.value.searchString.trim();
      form.reset();
      this.stadaService.getStada(searchString).subscribe(results => {
        console.log(results);
        this.stadas = results;
      });
    } else {
      form.reset();
      // TODO: Inform user to input text
    }
  }

}
