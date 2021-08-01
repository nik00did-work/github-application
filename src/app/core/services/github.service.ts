import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGithubResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  public constructor(
    private httpClient: HttpClient
  ) {}

  public sendGetRequest(url: string): Observable<IGithubResponse> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      }),
    };

    return this.httpClient.get<IGithubResponse>(url, options)
  }
}
