import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheesecakesService {
  constructor(private httpClient: HttpClient) {}

  getcheesecakes(): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/cheesecakes
`);
  }
  getSpecificcheesecakes(id: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/cheesecakes${id}
`);
  }
}
