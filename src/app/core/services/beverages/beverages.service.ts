import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeveragesService {
  constructor(private httpClient: HttpClient) {}

  getbeverages(): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/beverages
`);
  }
  getSpecificbeverages(id: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/beverages${id}
`);
  }
}
