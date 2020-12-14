import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';
let clientIdValue = []
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username:string
  password:string
  sInisSingedIn:boolean = false
  signInName = "Sign In"
  signedInName = "Logged In"
  constructor(private usrLogin: UserLoginService) { }

  ngOnInit(): void {
  }
  readLocalStorageValue(key) {
    return localStorage.getItem(key)
  }
  customerLogOut(){
    this.usrLogin.logOutMnCustomer() 
    localStorage.removeItem('userSignedIn')
  }
  sendUserInfo(){
    let userValue = JSON.stringify({
      username: this.username, 
      password: this.password
    })
    let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
    return fetch('/api/MCUserInfo',{
      method: 'POST',
      headers: myHeaders,
      body: userValue
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.signedin()
    })
    .catch(err => console.log(err))
  }
  signedin() {
    console.log('signedin');
    if(localStorage.getItem('userSignedIn') === null){
      
      this.usrLogin.userSignIn()
      .then(res => {
        console.log("All from app comp " + JSON.stringify(res))
        let userNameFound = false
        let passwordFound  = false
        let keys = Object.keys(res)
        let userNamevalue = []
        let passwordvalue = []
         for (var i = 0; i < keys.length; i++) {
          userNamevalue.push(res[i].clientUserName)
          passwordvalue.push(res[i].clientPassword)
          clientIdValue.push(res[i].clientId)
       } 
       if(userNamevalue.includes(this.username) && passwordvalue.includes(this.password)){ 
        userNameFound = true
        passwordFound = true
           }
       if(userNamevalue.includes(this.username) && !passwordvalue.includes(this.password)) {
        userNameFound = true
            passwordFound = false
           } 
       if(!userNamevalue.includes(this.username) && !passwordvalue.includes(this.password)){
        userNameFound = false
            passwordFound = false
           }
       if(!userNamevalue.includes(this.username) && passwordvalue.includes(this.password)) {
        userNameFound = false
            passwordFound = true
           }
       if(userNameFound && passwordFound){
         this.sInisSingedIn = true
         this.signInName = this.signedInName
        if(localStorage.getItem('userSignedUp') == 'SignedUpUser'){
          localStorage.removeItem('userSignedUp')
         }
         localStorage.setItem('userSignedIn', 'SignedUser')
         localStorage.setItem('userMnId', clientIdValue[0])
         window.location.replace("http://localhost:4200/home")
         alert('user name and password found user is signed in')
            return this.usrLogin.isSingedIn = true
         }       
       if(userNameFound && passwordFound == false) {
          alert('password doesnot match up, try again')
         } 
       if(userNameFound == false && passwordFound == false) {
          alert('account doesnot exist try again or sign up')
         }
       if(userNameFound == false && passwordFound) {
          alert('user name doesnot match up, try again')
         }
      }) 
      .catch(err => console.log('error from getting dataMongo ' + err))
    } 
  }
  customerDelete(){
    this.usrLogin.deleteCustomer()
  }
   
}
 


