import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';




bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // other providers if necessary
  ],
}).catch(err => console.error(err));
