import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugsPageRoutingModule } from './bugs-page-routing.module';
import { BugsPageComponent } from './bugs-page.component';
import { SimplebarAngularModule } from 'simplebar-angular';


@NgModule({
  declarations: [
    BugsPageComponent
  ],
  imports: [
    CommonModule,
    BugsPageRoutingModule,
    SimplebarAngularModule
  ]
})
export class BugsPageModule { }
