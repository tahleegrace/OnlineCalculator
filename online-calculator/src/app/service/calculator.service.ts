import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Operation } from '../model/operation';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private serviceUrl = 'http://calctest.iesim.biz';

  constructor(private http: HttpClient) { }
  
  getOperations(): Observable<Operation[]> {
    let url = `${this.serviceUrl}/operations`;

    return this.http.get<Operation[]>(url);
  }
}
