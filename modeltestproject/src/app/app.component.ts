import { Component, OnInit } from '@angular/core';
import {UserLoginService} from './user-login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'modeltestproject';
  name:string
  lastname:string
  username:string
  email:string
  password:string
  
  constructor(private usrLogin: UserLoginService){}
  ngOnInit() {}

  signedin() {
    console.log('signedin');
  }
  signedup() {
    let newName = this.name
    let newlastName = this.lastname
    let newUserName = this.username
    let newEmail = this.email
    let newPassword = this.password

    let newSignedup = []
    newSignedup.push(newName,newlastName,newUserName,newEmail,newPassword)
    console.log('signedup array is '  + newEmail + ' ' + newPassword);
    this.usrLogin.userSiginUp(newName,newlastName,newUserName,newEmail,newPassword)
    return newSignedup
  }
  menu_info() {
    console.log('menu info clicked');
  }
}

