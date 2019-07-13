import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatIconModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './screens/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
