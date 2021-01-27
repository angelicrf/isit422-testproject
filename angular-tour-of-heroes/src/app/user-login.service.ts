import { Injectable } from '@angular/core';
import { ErrorHandelersService } from './error-handelers.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  isSingedUp:boolean = false
  isSingedIn:boolean = false

  constructor(private errorService:ErrorHandelersService) { }
  userSiginUp(userName:string,userlastName:string,userUserName:string,userEmail:string,userPassword:string){
   
    let userValue = JSON.stringify({
      name: userName,
      lastname: userlastName,
      username: userUserName, 
      email: userEmail,
      password: userPassword
    })

    let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
    return fetch('/api/MCUser',{
      method: 'POST',
      headers: myHeaders,
      body: userValue
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => this.errorService.handleError(err))
  }
  userSignIn(){
    return new Promise((resolve, reject) => {
    fetch('/api/MCUserByUsrNmPwd', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(response => {return response.json()})
      .then(getdata => {
        console.log("getdata from Service " + JSON.stringify(getdata))
        let findAllMongoData = []
      
          let newUserMongoData = {}
          newUserMongoData['clientUserName'] = getdata.username
          newUserMongoData['clientPassword'] = getdata.password
          newUserMongoData['clientId'] = getdata._id
          findAllMongoData.push(newUserMongoData) 
 
        console.log("elementEmail from Service " + JSON.stringify(findAllMongoData))
          resolve(findAllMongoData)
      })
      .catch((err) => this.errorService.handleError(err))
  })
}
logOutMnCustomer() {
  fetch('/api/LogOutMCUser', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((response) => {return console.log(response)})
    .catch((err) => this.errorService.handleError(err));
}
deleteCustomer(){
  sessionStorage.clear();
  fetch('/api/DeleteMCUser', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((response) => {return console.log(response)})
    .catch((err) => this.errorService.handleError(err));
}
  
}
