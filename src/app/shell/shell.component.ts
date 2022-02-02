import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CustomRoute } from '../custom-route';

@Component({
  template: `
    <div class="shell__container">
      <h1>This is the Shell</h1>
      <a href="{{ getLink('home') }}" (click)="goToLink($event, 'home')">
      Home
      </a>

      <a href="{{ getLink('lobby') }}" (click)="goToLink($event, 'lobby')">
      Lobby
      </a>

      <router-outlet></router-outlet>
    </div>
    `,
  styles: [
    `
    .shell__container {
      background-color: grey;
      a {
        margin: 20px;
      }
    }
    `,
  ],
})
export class ShellComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log('Hey Im here');
  }

  goToLink(event, state: string) {
    event.preventDefault();
    this.router.navigateByUrl(window['sitemap'][state]);
    // const state = this.routerState;
  }

  getLink(state: string) {
    console.log(`${state} - ${window['sitemap'][state]}`);
  }
}

const routes: CustomRoute[] = [
  {
    future: true,
    state: 'home',
    path: '/home',
    loadChildren: () =>
      import('./../home/home.component').then((m) => m.HomeModule),
  },
  {
    future: true,
    state: 'lobby',
    path: '/lobby',
    loadChildren: () =>
      import('./../lobby/lobby.component').then((m) => m.LobbyModule),
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ShellComponent, children: routes },
    ]),
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class ShellModule {}
