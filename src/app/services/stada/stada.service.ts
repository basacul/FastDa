import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StadaService {
  // api url for stada
  url: string = "https://api.deutschebahn.com/stada/v2/stations";

  // includes the token to access the stada dataset
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': "application/json",
      'Authorization': "Bearer ee9f3b85fac212f8e4a7bbb3487627ec"
    })
  };

  /**
   * Takes the searchString and includes it in the query url for the StaDa dataset. 
   * @param searchString a string to search for train stations
   * @return Observable<any[]> An Observable holding an array of  Stada objects
   */
  getStada(searchString: string): Observable<any[]> {
    const mode: string = '?limit=20&searchstring=';

    // added a star at the end to force a search and avoid error 404
    return this.http.get<any[]>(`${this.url}${mode}${searchString}*`, this.httpOptions);
  }

  constructor(private http: HttpClient) { }
}
