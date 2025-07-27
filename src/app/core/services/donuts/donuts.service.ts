import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DonutsService {
  constructor(private httpClient: HttpClient) {}

  getdonuts(): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/donuts
`);
  }
  getSpecificdonuts(id: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/donuts${id}
`);
  }
}
