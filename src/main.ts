import { enableProdMode, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';

import 'hammerjs';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routing';
import { bootstrapApplication, HammerModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideZoneChangeDetection(),provideRouter(routes), importProvidersFrom(HammerModule)],
}).catch((err) => console.log(err));
