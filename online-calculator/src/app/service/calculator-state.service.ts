import { Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { map } from 'rxjs/operators';

import * as _ from 'underscore';

import { CalculatorService } from './calculator.service';

import { Operation } from "../model/operation";

@Injectable({
  providedIn: 'root'
})
export class CalculatorStateService {
  private operands: any[] = [];

  constructor(private calculatorService: CalculatorService) { }

  // TODO: Add error handling to this method.
  addOperand(operand: any): Observable<number> {
    let previousOperand = this.operands.length > 0 ? this.operands[this.operands.length - 1] : null;

    if (_.isObject(operand)) { // Adding an operator (e.g. +, -).
      if (operand.arguments == 0) {
        // TODO: Correctly implement zero argument operators.
        return empty();
        /*this.calculatorService.performOperation(operand.operation, null).pipe(map((result) => {
          if (_.isObject(previousOperand)) {

          }
        }));*/
      } else if (operand.arguments == 1) {
        if ((previousOperand != null) && ((_.isNumber(previousOperand)) || (previousOperand.arguments < 2))) {
          this.operands[this.operands.length - 1] = operand;
        } else {
          this.operands.push(operand);
        }
      } else if (operand.arguments == 2) {
        // TODO: Handle the equals operator here.
        if ((previousOperand == null) && ((operand.operation == '+') || (operand.operation == '-'))) {
          this.operands.push(operand);
        } else if (_.isNumber(previousOperand)) {
          this.operands.push(operand);
        } else if (_.isObject(previousOperand)) {
          this.operands[this.operands.length - 1] = operand;
        }
      }
    } else { // Adding a number.
      // TODO: Correctly implement zero argument operators.
      if ((previousOperand == null) || (_.isObject(previousOperand))) {
        this.operands.push(operand);
      } else {
        let power = Math.floor(Math.log10(previousOperand)) + 1;

        let newNumber = (previousOperand * (10 ** power)) + operand;
        this.operands[this.operands.length - 1] = newNumber;
      }
    }
  }
}
