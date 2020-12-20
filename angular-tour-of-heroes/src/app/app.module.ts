import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS} from "@angular/common/http";
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FinalprojectComponent } from './finalproject/finalproject.component';
import { CloudmanagementComponent } from './cloudmanagement/cloudmanagement.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { FiletransferComponent } from './filetransfer/filetransfer.component';
const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    DragDropModule,
    MsalModule.forRoot({
      auth: {
        clientId: '266792a9-b745-45e2-a76d-494d6720ebb8', 
        authority: 'https://login.microsoftonline.com/86f787e3-7449-44ed-bf0d-e38849bb7370', //f8cdef31-a31e-4b4a-93e4-5f571e91255a //86f787e3-7449-44ed-bf0d-e38849bb7370
        redirectUri: 'http://localhost:4200/filetransfer/'
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE, 
      },
    }, {
      popUp: !isIE,
      consentScopes: [
        'user.read',
        'openid',
        'profile',
      ],
      unprotectedResources: [],
      protectedResourceMap: [
        ['https://graph.microsoft.com/v1.0/me', ['user.read']]
      ],
      extraQueryParameters: {}
    })
  ],
  declarations: [
    AppComponent,
    MessagesComponent,
    FinalprojectComponent,
    CloudmanagementComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    FiletransferComponent
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: MsalInterceptor,
        multi: true
    }
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }