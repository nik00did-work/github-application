import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public constructor(
    private httpClient: HttpClient
  ) {}

  public sendGetRequest(url: string): Observable<string> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };

    return this.httpClient.get<string>(url, options)
  }
}
