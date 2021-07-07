import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsPageComponent } from './songs-page.component';

const routes: Routes = [
  { path: '', component: SongsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongsPageRoutingModule { }
