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
         await getProfile(this.getOdAccessToken);
      },30000);
    }else{
      this.authService.loginPopup({
        extraScopesToConsent: ["user.read", "openid", "profile"]
      });
     setTimeout(async () => {
      this.getOdAccessToken = await this.odGetAccessToken();
      // Receive jwt
      await getProfile(this.getOdAccessToken);
     },30000);
    }  
}
odGetAccessToken(){
  const requestObj = {
    scopes: ["user.read"]
};
this.authService.acquireTokenSilent(requestObj)
.then(function (tokenResponse) {
    console.log(tokenResponse.accessToken);
}).catch(function (error) {
    console.log(error);
});
}
async loginFirstOption(){
  console.log("firstOption");
     this.authService.loginRedirect({
        extraScopesToConsent: ["user.read", "openid", "profile"]    
      });
 }
async loginSecondOption(){
  console.log("SecondOption");
  this.authService.loginPopup({
    extraScopesToConsent: ["user.read", "openid", "profile"]
  });
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
        /* .then((result) => {
          return result.json();
         }) */
         .then(response => {
           console.log("profileInfo from Service " + JSON.stringify(response));
          resolve(response)
        })
        .catch((err) => console.log(err));
    })
}
