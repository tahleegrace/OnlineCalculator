import { Component, OnInit } from '@angular/core';

import { CalculatorService } from "../service/calculator.service";

import { Operation } from "../model/operation";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public isLoading: boolean = true;

  public operations: Operation[];

  constructor(private calculatorService: CalculatorService) { }

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
