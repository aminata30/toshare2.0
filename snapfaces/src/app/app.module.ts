import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsnapComponent } from './asnap/asnap.component';
import { ASnapListComponent } from './a-snap-list/a-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleASnapComponent } from './single-a-snap/single-a-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    AsnapComponent,
    ASnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleASnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
