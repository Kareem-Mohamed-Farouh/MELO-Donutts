import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  constructor(private httpClient: HttpClient) {}

  getCookies(): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/cookies
`);
  }
  getSpecificCookies(id: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/cookies/${id}
`);
  }
}
