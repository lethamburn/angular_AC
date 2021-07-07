import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugsPageComponent } from './bugs-page.component';

const routes: Routes = [
  {
    path: '',
    component: BugsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BugsPageRoutingModule {}
