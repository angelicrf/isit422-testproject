import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name:string
  lastname:string
  username:string
  email:string
  password:string
  signedUpName = "Signed Up"
  signUpName = "Sign Up"
  sUpisSingedUp:boolean = false

  constructor(private usrLogin: UserLoginService) { }

  ngOnInit(): void {
  }
  readLocalStorageValue(key) {
    return localStorage.getItem(key)
  }
  signedup() {
    if(localStorage.getItem('userSignedUp') === null){
    let newName = this.name
    let newlastName = this.lastname
    let newUserName = this.username
    let newEmail = this.email
    let newPassword = this.password
    
    let newSignedup = []
    newSignedup.push(newName,newlastName,newUserName,newEmail,newPassword)
    console.log('signedup array is '  + newEmail + ' ' + newPassword)
    this.usrLogin.userSiginUp(newName,newlastName,newUserName,newEmail,newPassword)
    this.sUpisSingedUp = true
    this.usrLogin.isSingedUp = true
    localStorage.setItem('userSignedUp','SignedUpUser')
    window.location.replace("http://localhost:4200/home")
    return this.usrLogin.isSingedUp
    }
  }
}
