import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { FeaturesComponent } from './components/pages/features/features.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import {NgbDropdownModule, NgbDropdownMenu, NgbDropdownItem } from '@ng-bootstrap/ng-bootstrap';
export function initGapi(gapiSession: FeaturesComponent) {
  console.log('right inside initgapi');
  return () => {
    console.log('inside return initgapi');
    gapiSession.initClient();
    console.log('after return initGapi');
  };
}

@NgModule({
  declarations: [AppComponent, ServicesComponent, FeaturesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    //NgbDropdownModule,
    //NgbDropdownMenu,
    //NgbDropdownItem
  ],
  providers: [
    //{ provide: APP_INITIALIZER, useFactory: initGapi, deps: [FeaturesComponent], multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
