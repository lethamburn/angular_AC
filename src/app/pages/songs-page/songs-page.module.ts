import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsPageRoutingModule } from './songs-page-routing.module';
import { SongsPageComponent } from './songs-page.component';


@NgModule({
  declarations: [
    SongsPageComponent
  ],
  imports: [
    CommonModule,
    SongsPageRoutingModule
  ]
})
export class SongsPageModule { }
