import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BxCloudService {

  constructor() { }

  accesToken:string = '';
  boxCodeStored:string = '';

  boxRedirectCode(){
    let bxUrl = "https://account.box.com/api/oauth2/authorize?response_type=code&client_id=cizpnka9apgvmixa683wgv0lk63cbv7q&redirect_uri=http://localhost:4200/filetransfer";
    let link = document.createElement('a')
    link.href = bxUrl;
    link.click();
  }
  getBoxCodefromUri(): string {
    const uriLink = location.href;
    const newUri = new URL(uriLink);
    const findParam = newUri.searchParams.get('code');
    //console.log(findParam)
    return findParam;
  }
  async getboxCodeOauth(boxIssuedCode:string){
    console.log("getboxCodeOauth called");
    console.log( "boxIssuedCode " + boxIssuedCode);
    return await new Promise((resolve,reject) => {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let raw = JSON.stringify({
        title: 'codefromAngular',
        saveCode: boxIssuedCode,
      });

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };

      fetch('/api/BoxCode', requestOptions)
        .then((response) => {
          console.log("inside the ResponseOne"); 
           return response.json();
        })
        .then(result => {
          console.log("inside the ResponseTWo");
          resolve(`Code Issued ${result}`);
        })
        .catch(err => console.log("Error from BoxCode " + err));
        
   });
  }
  async issueBoxAccessToken(){
    return await new Promise((resolve,reject) => {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let requestOptions = {
        method: 'GET',
        headers: myHeaders
      };

      fetch('/api/BoxOauth', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          //console.log('the acces_token is ', result[Object.keys(result)[0]]);
          this.accesToken = result[Object.keys(result)[1]];
          console.log("AccessToken form BoxService " + this.accesToken);
          resolve(this.accesToken);
      });
   });
  }
}
