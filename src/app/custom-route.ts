import { Route } from '@angular/router';

export interface CustomRoute extends Route {
  future?: boolean;
  state?: string;
  group?: string;
  _complete?: boolean;
  data?: {
    bigLogo?: boolean;
    landing?: boolean;
    hideTopMainSection?: boolean;
  };
}
