import { Injectable } from '@angular/core';
import { MsalService, BroadcastService } from '@azure/msal-angular';
@Injectable({
  providedIn: 'root'
})
export class OdCloudService {
  profile: any;
  getOdAccessToken:any;
  issuedOdAccessToken:any;

constructor(
   private broadcastService: BroadcastService,
  private authService: MsalService
  ) { }
  login() {
    let odUrl = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=code&client_id=266792a9-b745-45e2-a76d-494d6720ebb8&redirect_uri=http://localhost:4200/filetransfer/&scope=https://graph.microsoft.com/Files.ReadWrite.All https://graph.microsoft.com/User.ReadWrite.All"
    let link = document.createElement('a');
    link.href = odUrl;
    link.click();
    }
async odGetAccessToken(){
    return await new Promise((resolve,reject) => {
    const requestObj = {
      scopes: ["user.read"]
  };
  this.authService.acquireTokenSilent(requestObj)
  .then(function (tokenResponse) {
      console.log("New AccessToken from service "+ JSON.stringify(tokenResponse));
      return resolve(tokenResponse.accessToken);
      }).catch(function (error) {
      console.log(error);
    });
  });      
 }
 async getOdCodefromUri(){
  let isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
  if(isIE){
    this.authService.loginRedirect({
      extraScopesToConsent: ["user.read", "openid", "profile"]    
    });
    setTimeout(async () => {
      const uriLink = location.href;
  const newUri = new URL(uriLink);
  const findParam = newUri.searchParams.get('code');
  console.log(findParam);
  this.issuedOdAccessToken = await getOdAccessToken(findParam);
  let profileAccessToken = await this.odGetAccessToken();
  console.log("profileAccessToken " + profileAccessToken);
    },30000);
  }else{
    this.authService.loginPopup({
      extraScopesToConsent: ["user.read", "openid", "profile"]
    });
   setTimeout(async () => {
    const uriLink = location.href;
  const newUri = new URL(uriLink);
  const findParam = newUri.searchParams.get('code');
  console.log(findParam);
  this.issuedOdAccessToken = await getOdAccessToken(findParam);
  let profileAccessToken:any = await this.odGetAccessToken();
  let profileClientInfo = getProfile(profileAccessToken);
  console.log("profileAccessToken " + profileClientInfo);
   },30000);
  } 
  //let odStoreClientProfile:any = await getProfile();
  //console.log("odStoreClientProfile " + odStoreClientProfile);
  //localStorage.setItem("odClientEmail", odStoreClientProfile);
  return this.issuedOdAccessToken;
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
async function getOdAccessToken(odToken:string) {
  return await new Promise((resolve,reject) => {
    fetch('/api/OdAccessToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        odCode: odToken
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
async function getProfile(profileAccess:string) {
    return await new Promise((resolve,reject) => {
      fetch('/api/OdProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          odProfileAcTk:profileAccess
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

