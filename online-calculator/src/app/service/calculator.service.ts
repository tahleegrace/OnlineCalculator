import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Operation } from '../model/operation';
import { OperationResult } from '../model/operation-result';

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

  performOperation(operation: string, values: number[]): Observable<OperationResult> {
    let valuesQuery = values.map((value, index) => `op${index + 1}=${value}`).join('&');

    let url = `${this.serviceUrl}/${operation}?${valuesQuery}`;

    return this.http.get<OperationResult>(url);
  }
}
