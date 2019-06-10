import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FastaService {
  // api url for stada
  url: string = "https://api.deutschebahn.com/fasta/v2/facilities";


  // includes the token to access the stada dataset
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': "application/json",
      'Authorization': "Bearer ee9f3b85fac212f8e4a7bbb3487627ec"
    })
  };

  /**
   * Get Request to return a specific FaSta entry
   * @param id of the train station
   * @return Observable<any[]> An Observable holding a fasta entry
   */
  getFasta(id: string): Observable<any[]> {
    const mode: string = '?stationnumber=';
    return this.http.get<any[]>(`${this.url}${mode}${id}`, this.httpOptions);
  }

  constructor(private http: HttpClient) { }
}
