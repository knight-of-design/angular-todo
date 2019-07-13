import {
  BrowserModule,
  DomSanitizer
} from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatIconRegistry, MatInputModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './screens/landing-page/landing-page.component';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './screens/registration/registration.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgbTypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // https://github.com/angular/components/issues/5188#issuecomment-329090401
    const proto = Object.getPrototypeOf(matIconRegistry);
    const original: ((e: Element) => Element) = proto._toSvgElement;
    proto._toSvgElement = (element: Element) => {
      const svg = original.call(matIconRegistry, element);
      const viewBox = element.getAttribute('viewBox');
      if (viewBox) {
        svg.setAttribute('viewBox', viewBox);
      }
      return svg;
    };

    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/i/svg-symbols.svg'));
  }
}

