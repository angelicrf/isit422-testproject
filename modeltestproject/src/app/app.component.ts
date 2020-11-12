import { Component, OnInit } from '@angular/core';
import {UserLoginService} from './user-login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'modeltestproject'
  chekedRemember = false
  name:string
  lastname:string
  username:string
  email:string
  password:string
  isEmailValid:boolean

  
  constructor(private usrLogin: UserLoginService){}
  ngOnInit() {}

  signedin() {
    console.log('signedin');
  /*    if(localStorage.length != 0){
      this.email = localStorage.getItem('clientEmail')
      this.password = localStorage.getItem('clientPassword')
    }  */
    //else{
      this.usrLogin.userSignIn()
      .then(res => {
        console.log("All from app comp " + JSON.stringify(res))
        let emailFound = false
        let passwordFound  = false
        let keys = Object.keys(res)
        let emailvalue = []
        let passwordvalue = []
         for (var i = 0; i < keys.length; i++) {
          emailvalue.push(res[i].clientEmail)
          passwordvalue.push(res[i].clientPassword)
       } 
       if(emailvalue.includes(this.email) && passwordvalue.includes(this.password)){ 
        emailFound = true
        passwordFound = true
           }
       if(emailvalue.includes(this.email) && !passwordvalue.includes(this.password)) {
            emailFound = true
            passwordFound = false
           } 
       if(!emailvalue.includes(this.email) && !passwordvalue.includes(this.password)){
            emailFound = false
            passwordFound = false
           }
       if(!emailvalue.includes(this.email) && passwordvalue.includes(this.password)) {
            emailFound = false
            passwordFound = true
           }
       if(emailFound && passwordFound){
            alert('email and password found user is signed in')
         }       
       if(emailFound && passwordFound == false) {
          alert('password doesnot match up, try again')
         } 
       if(emailFound == false && passwordFound == false) {
          alert('account doesnot exist try again or sign up')
         }
       if(emailFound == false && passwordFound) {
          alert('email doesnot match up, try again')
         }
      }) 
      .catch(err => console.log('error from getting dataMongo ' + err))
    } 
  
  signedup() {
    let newName = this.name
    let newlastName = this.lastname
    let newUserName = this.username
    let newEmail = this.email
    let newPassword = this.password
    
    let newSignedup = []
    newSignedup.push(newName,newlastName,newUserName,newEmail,newPassword)
    console.log('signedup array is '  + newEmail + ' ' + newPassword)
    this.usrLogin.userSiginUp(newName,newlastName,newUserName,newEmail,newPassword)
    
    if(this.chekedRemember){
      localStorage.setItem('clientEmail',newEmail)
      localStorage.setItem('clientPassword',newPassword)
    }
    return newSignedup

  }
  validateEmail(email):boolean {
    
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase())){
      return this.isEmailValid = true
    }
    else {
      alert('email is invalid')
      return this.isEmailValid = false
    }
   }
   
  menu_info() {
    console.log('menu info clicked');
  }
}

