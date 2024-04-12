import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parameters } from '../interfaces/maximumModuloI';
import { Environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaximumIntegerModuloService {

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS, DELETE, PATCH, TRACE, HEAD',
      'Access-Control-Allow-Headers':
        'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    })
  };

  saveParameters(parameters: Parameters): Observable<any> {
    return this.http.post(`${Environment.url}/setParameters`, parameters, this.httpOptions);
  }

  getMaximumInteger(): Observable<any> {
    return this.http.get(`${Environment.url}/getMaximumInteger`, this.httpOptions);
  }
}
