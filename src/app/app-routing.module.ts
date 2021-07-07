import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'bugs',
    loadChildren: () =>
      import('./pages/bugs-page/bugs-page.module').then(
        (m) => m.BugsPageModule
      ),
  },
  {
    path: 'fishes',
    loadChildren: () =>
      import('./pages/fishes-page/fishes-page.module').then(
        (m) => m.FishesPageModule
      ),
  },
  {
    path: 'songs',
    loadChildren: () =>
      import('./pages/songs-page/songs-page.module').then(
        (m) => m.SongsPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
