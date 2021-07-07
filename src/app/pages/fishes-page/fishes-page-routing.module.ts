import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FishesPageComponent } from './fishes-page.component';

const routes: Routes = [{
  path: "", component: FishesPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FishesPageRoutingModule { }
