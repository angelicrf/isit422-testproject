import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor() { }

  userSiginUp(userName:string,userlastName:string,userUserName:string,userEmail:string, userPassword:string){
   
    let userValue = JSON.stringify({
      uName: userName,
      uLastName: userlastName,
      uuserName: userUserName, 
      uEmail : userEmail,
      uPassword: userPassword
    })

    let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
    return fetch('/api/UserLogin',{
      method: 'POST',
      headers: myHeaders,
      body: userValue
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }
  userSignIn(){
    return new Promise((resolve, reject) => {
    fetch('/api/UserMongoCR', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(response => {return response.json()})
      .then(getdata => {
        //console.log("getdata from Service " + JSON.stringify(getdata))
        let findAllMongoData = []
        
        getdata.forEach(element => {  
          let newUserMongoData = {}
          newUserMongoData['clientEmail'] = element.email
          newUserMongoData['clientPassword'] = element.password
          findAllMongoData.push(newUserMongoData) 
        })
        //console.log("elementEmail from Service " + JSON.stringify(findAllMongoData))
          resolve(findAllMongoData)
      })
      .catch((err) => console.log("Error getdata from Service " + err))
  })
}
}
