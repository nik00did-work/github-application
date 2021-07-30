import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routers: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modules/main/main.module').then(module => module.MainModule)
  },
  {
    path: 'current-repository',
    loadChildren: () => import('src/app/modules/current-repository/current-repository.module').then(module => module.CurrentRepositoryModule)
  }, //TODO use guard
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routers),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
