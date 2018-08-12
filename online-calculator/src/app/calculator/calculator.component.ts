import { Component, OnInit } from '@angular/core';

import { CalculatorService } from "../service/calculator.service";
import { CalculatorStateService } from '../service/calculator-state.service';

import { Operation } from "../model/operation";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public isLoading: boolean = true;

  public operations: Operation[];
  public numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  constructor(private calculatorService: CalculatorService,
              public calculatorStateService: CalculatorStateService) { }

  ngOnInit() {
    this.loadOperations();
  }

  private loadOperations() {
    // TODO: Add error handling here.
    this.calculatorService.getOperations().subscribe((operations) => {
      this.operations = operations;

      this.isLoading = false;
    });
  }
}
