import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FinalprojectComponent } from './finalproject/finalproject.component'
import { CloudmanagementComponent } from './cloudmanagement/cloudmanagement.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { FiletransferComponent } from './filetransfer/filetransfer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent} ,
  { path: 'users', component: FinalprojectComponent },
  { path: 'cloudmanagement/', component: CloudmanagementComponent },
  { path: 'filetransfer', component: FiletransferComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent}
];
//FinalProjectComponent
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}