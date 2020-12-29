import { Injectable } from '@angular/core';
import { AnyPtrRecord, AnySoaRecord } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class BxCloudService {

  constructor() { }

  accesToken:string = '';
  boxCodeStored:string = '';

  boxRedirectCode(){
    let bxUrl = "https://account.box.com/api/oauth2/authorize?response_type=code&client_id=cizpnka9apgvmixa683wgv0lk63cbv7q&redirect_uri=http://localhost:4200/cloudmanagement";
    let link = document.createElement('a')
    link.href = bxUrl;
    link.click();
  }
 async getBoxCodefromUri(){
    return await new Promise((resolve,reject) => {
      const uriLink = location.href;
      const newUri = new URL(uriLink);
      const findParam = newUri.searchParams.get('code');
      return resolve(findParam);
    }); 
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
          this.accesToken = result[Object.keys(result)[1]];
          console.log("AccessToken form BoxService " + this.accesToken);
          localStorage.setItem("bxAccessToken", this.accesToken);
          resolve(this.accesToken);
      });
   });
  }
  async getBoxClientInfo(){
    return await  new Promise((resolve,reject) => {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let requestOptions = {
        method: 'GET',
        headers: myHeaders
      };
      fetch('/api/BoxClientEmail', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          let saveClientEmail:any = result[Object.keys(result)[1]];
          let saveClientName:any = result[Object.keys(result)[2]];
          let holdBoxClientInfo = [];
          
          holdBoxClientInfo.push(saveClientName,saveClientEmail)
          console.log("BoxClientEmail form BoxService " + saveClientEmail);
          resolve(holdBoxClientInfo);
      });   
    });
  }
  async boxShowFile(){
    return await  new Promise((resolve,reject) => {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let requestOptions = {
        method: 'GET',
        headers: myHeaders
      };
      fetch('/api/BoxGetFile', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          let holdFileInfo:any = result[Object.keys(result)[1]];
          console.log("boxShowFile form BoxService " + JSON.stringify(holdFileInfo));
          resolve(holdFileInfo);
      });   
    });
  }
  async boxAllFoldersFiles(){
    return await  new Promise((resolve,reject) => {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let requestOptions = {
        method: 'GET',
        headers: myHeaders
      };

      fetch('/api/BoxGetFolders', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          let holdAllFlsFils:any = result[Object.keys(result)[1]];
          resolve(holdAllFlsFils);
      });   
    });
  }
  async boxDownload(bxId:string, bxName:string){
    console.log("boxDownload from service " + bxId + bxName);
    return await  new Promise((resolve,reject) => {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      let raw = JSON.stringify({
        title: 'codefromAngular',
        boxFileId: bxId,
        boxFileName: bxName
      });
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
      };

      fetch('/api/BxDownload', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          let msgDisplay:any = result[Object.keys(result)[0]];
          console.log("boxDownload form BoxService " + msgDisplay);
          resolve(msgDisplay);
      });   
    });
  }
  async boxUpload(bxFlName:string){
    return await  new Promise((resolve,reject) => {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      let raw = JSON.stringify({
        title: 'codefromAngular',
        boxUpFileName: bxFlName
      });
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body:raw
      };

      fetch('/api/BxUpload', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          let msgDisplay:any = result[Object.keys(result)[0]];
          console.log("boxUpload form BoxService " + msgDisplay);
          resolve(msgDisplay);
      });   
    });
  }
  sendBoxClientInfo(getBxName:string,getBxEmail:string,getUserMongoId:string){
    let bxClientValue = JSON.stringify({
      bxname: getBxName,
      bxemail: getBxEmail,
      usermongoid: getUserMongoId, 
    })
    let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
    return fetch('/api/MCBoxClient',{
      method: 'POST',
      headers: myHeaders,
      body: bxClientValue
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }
}
