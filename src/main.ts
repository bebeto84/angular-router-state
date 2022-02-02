import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const SITEMAP_PATHS: { [language: string]: { [state: string]: string } } = {
  en: {
    home: '/home',
    lobby: '/lobby',
  },
  es: {
    home: '/inicio',
    lobby: '/sala',
  },
};

const getLanguage = (): RegExpMatchArray | null =>
  `${location.pathname}${location.hash}`.match('^/(en|es)/.*');

const getSitemapPaths = (): Promise<any> => {
  const [, currentLanguage] = getLanguage() ?? [];
  console.log(`Current language ${currentLanguage}`);
  if (!currentLanguage) {
    location.assign(location.protocol + '//' + location.host + '/en/');
    // Just for type sake, location.assign is going to reload the whole app anyway
    return Promise.reject(false);
  }
  window['sitemap'] = SITEMAP_PATHS[currentLanguage];
  return Promise.resolve(true);
};

getSitemapPaths().then(() =>
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((ref) => {
      // Ensure Angular destroys itself on hot reloads.
      if (window['ngRef']) {
        window['ngRef'].destroy();
      }
      window['ngRef'] = ref;

      // Otherwise, log the boot error
    })
    .catch((err) => console.error(err))
);
