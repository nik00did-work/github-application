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

  public sendGetRequest(search: string): Observable<string> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };
    const url = `https://api.github.com/search/repositories?q=${search}`;

    return this.httpClient.get<string>(url, options)
  }
}
