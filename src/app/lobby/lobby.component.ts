import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  template: `<h1>This is the Lobby</h1>`,
  styles: [`background-color: red`],
})
export class LobbyComponent implements OnInit {
  ngOnInit(): void {
    console.log('Hey Im here');
  }
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LobbyComponent }]),
  ],
  declarations: [LobbyComponent],
  exports: [LobbyComponent],
})
export class LobbyModule {}
