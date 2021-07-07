import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugsPageRoutingModule } from './bugs-page-routing.module';
import { BugsPageComponent } from './bugs-page.component';


@NgModule({
  declarations: [
    BugsPageComponent
  ],
  imports: [
    CommonModule,
    BugsPageRoutingModule
  ]
})
export class BugsPageModule { }
