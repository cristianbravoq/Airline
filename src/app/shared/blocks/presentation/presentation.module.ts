import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation.component';
import { NavbarModule } from '../../elements/navbar/navbar.module';



@NgModule({
  declarations: [
    PresentationComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [
    PresentationComponent
  ]
})
export class PresentationModule { }
