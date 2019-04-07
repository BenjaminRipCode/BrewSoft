import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrasseurItem } from '../models/brasseurItem';
import { map } from 'rxjs/operators';

const endpoint = 'http://localhost:56860/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BrasseurService {

  constructor(private http: HttpClient) {

  }

  private extractData(res: Response) {
      let body = res;
      return body || { };
  }

  get(): Observable<any> {
      return this.http.get(endpoint + 'brasseurs', httpOptions).pipe(map(this.extractData));
  }
}
