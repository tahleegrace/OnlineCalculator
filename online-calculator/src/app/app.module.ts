import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CalculatorService } from './service/calculator.service';
import { CalculatorStateService } from './service/calculator-state.service';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CalculatorService,
    CalculatorStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
