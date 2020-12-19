import { Injectable } from '@angular/core';

import { MsalService, BroadcastService } from '@azure/msal-angular';
@Injectable({
  providedIn: 'root'
})
export class OdCloudService {
  profile: any;

constructor(private broadcastService: BroadcastService, private authService: MsalService) { }
  login() {
    const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

    if (isIE) {
      this.authService.loginRedirect({
        extraScopesToConsent: ["user.read", "openid", "profile"]
      });
    } else {
      this.authService.loginPopup({
        extraScopesToConsent: ["user.read", "openid", "profile"]
      });
    }
}

async getProfile() {
  const graphMeEndpoint = "https://graph.microsoft.com/v1.0/me";
   /*  this.http.get(graphMeEndpoint).toPromise()
    .then(profile => {
      this.profile = profile;
    }); */
    return await new Promise((resolve,reject) => {
      fetch(graphMeEndpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((profile) => {
          console.log(profile);
          this.profile = profile;
          return resolve(profile);
         })
        .catch((err) => console.log(err));
    })
}
}
