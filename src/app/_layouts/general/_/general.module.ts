import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './../__/general.component';
import { GeneralRoutingModule } from './general-routing.module';

@NgModule({
  declarations: [
    GeneralComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
  ]
})
export class GeneralModule { }
