import { Injectable } from '@angular/core';

import { MsalService, BroadcastService } from '@azure/msal-angular';
@Injectable({
  providedIn: 'root'
})
export class OdCloudService {
  profile: any;
  getOdAccessToken:any;

constructor(private broadcastService: BroadcastService, private authService: MsalService) { }
  login() {
    let isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
    if(isIE){
      this.authService.loginRedirect({
        extraScopesToConsent: ["user.read", "openid", "profile"]    
      });
      setTimeout(async () => {
        this.odLoginProcess();
      },30000);
    }else{
      this.authService.loginPopup({
        extraScopesToConsent: ["user.read", "openid", "profile"]
      });
     setTimeout(async () => {
      this.odLoginProcess();
     },30000);
    }  
}
async odGetAccessToken(){
   return await new Promise((resolve,reject) => {
    const requestObj = {
      scopes: ["user.read"]
  };
  this.authService.acquireTokenSilent(requestObj)
  .then(function (tokenResponse) {
      return resolve(tokenResponse.accessToken);
      }).catch(function (error) {
      console.log(error);
    });
  });     
 }
 async odLoginProcess(){
  this.getOdAccessToken = await this.odGetAccessToken();
  let odStoreClientProfile:any = await getProfile(this.getOdAccessToken);
  localStorage.setItem("odClientEmail", odStoreClientProfile);
  window.location.replace("http://localhost:4200/filetransfer");
 }
 async odGetFiles(){
  return await new Promise((resolve,reject) => {
    let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let requestOptions = {
        method: 'GET',
        headers: myHeaders
      };

      fetch('/api/OdGetFiles', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          let holdOdAllFlsFils:any = result[Object.keys(result)[1]];
          console.log("odFiles from service " + holdOdAllFlsFils);
          resolve(holdOdAllFlsFils);
      });  
  })
}
}
async function getProfile(odToken:string) {
    return await new Promise((resolve,reject) => {
      fetch('/api/OdProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          odAccess: odToken
        })
      })
         .then((result) => {
          return result.json();
         }) 
         .then(response => {
          let msgDisplay:any = response[Object.keys(response)[1]];
          resolve(msgDisplay)
        })
        .catch((err) => console.log(err));
    })
}

