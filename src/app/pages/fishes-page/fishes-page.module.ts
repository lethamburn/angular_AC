import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FishesPageRoutingModule } from './fishes-page-routing.module';
import { FishesPageComponent } from './fishes-page.component';


@NgModule({
  declarations: [
    FishesPageComponent
  ],
  imports: [
    CommonModule,
    FishesPageRoutingModule
  ]
})
export class FishesPageModule { }
