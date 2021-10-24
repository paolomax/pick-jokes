import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'jokes',
    loadChildren: () =>
      import('./modules/jokes/jokes.module').then((m) => m.JokesModule),
  },
  {
    path: '', redirectTo: '/jokes', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
