import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PresentationModule } from 'src/app/shared/blocks/presentation/presentation.module';
import { FooterModule } from 'src/app/shared/blocks/footer/footer.module';
import { OffersModule } from 'src/app/shared/blocks/offers/offers.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PresentationModule,
    FooterModule,
    OffersModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
