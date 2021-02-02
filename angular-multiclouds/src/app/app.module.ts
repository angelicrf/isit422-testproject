import { NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
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
import { ErrorHandelersService } from './error-handelers.service';
import { Location } from '@angular/common';

const __stripTrailingSlash = (Location as any).stripTrailingSlash;
(Location as any).stripTrailingSlash = function _stripTrailingSlash(url: string): string {
  const queryString$ = url.match(/([^?]*)?(.*)/);
  if (queryString$[2].length > 0) {
    return /[^\/]\/$/.test(queryString$[1]) ? queryString$[1] + '.' + queryString$[2] : __stripTrailingSlash(url);
  }
  return /[^\/]\/$/.test(url) ? url + '.' : __stripTrailingSlash(url);
};
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
    DragDropModule
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
  providers: [{
    provide:ErrorHandler,
    useClass: ErrorHandelersService
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }