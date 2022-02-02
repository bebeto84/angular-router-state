import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomRoute } from './custom-route';

const routes: CustomRoute[] = [
  {
    future: true,
    path: ':lingua',
    loadChildren: () =>
      import('./shell/shell.component').then((m) => m.ShellModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/en' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
