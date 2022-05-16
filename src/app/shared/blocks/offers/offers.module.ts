import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { TripMenuModule } from '../../elements/trip-menu/trip-menu.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OffersComponent
  ],
  imports: [
    CommonModule,
    TripMenuModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    OffersComponent
  ]
})
export class OffersModule { }
