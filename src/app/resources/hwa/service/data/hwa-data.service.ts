import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HwaDataService {
  constructor(private http: HttpClient) {}

  HWA_API_URL = environment.HWA_API_URL;

  getDataHello(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    return this.http.get(`${this.HWA_API_URL}/hello`, {
      headers,
      responseType: 'text',
    });
  }

  getDataDocker(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.http.get(`${this.HWA_API_URL}/api/public/docker`, {
      headers,
      responseType: 'json',
    });
  }

  getDataDummy(selectdb): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.http.get(`${this.HWA_API_URL}/api/public/dummy/${selectdb}`, {
      headers,
      responseType: 'json',
    });
  }
}
