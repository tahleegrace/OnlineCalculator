import { TestBed, inject } from '@angular/core/testing';

import { CalculatorStateService } from './calculator-state.service';

describe('CalculatorStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorStateService]
    });
  });

  it('should be created', inject([CalculatorStateService], (service: CalculatorStateService) => {
    expect(service).toBeTruthy();
  }));
});
