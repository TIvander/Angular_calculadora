import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from './calc';
import { CalculadoraService } from "./services";


@NgModule({
  declarations: [
    CalcComponent
  ],
  exports: [
    CalcComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
