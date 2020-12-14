import { Injectable } from '@angular/core';
import { Dropbox } from 'dropbox';

@Injectable({
  providedIn: 'root'
})
export class DpCloudService {

  constructor() { }

  accesToken: string;

  getCodefromUri(): string {
    const uriLink = location.href;
    const newUri = new URL(uriLink);
    const findParam = newUri.searchParams.get('code');
    //console.log(findParam)
    return findParam;
  }
  sendMessageToNode(sendCodeData: string) {
    return new Promise((resolve, reject) => {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let raw = JSON.stringify({
        title: 'codefromAngular',
        saveCode: sendCodeData,
      });

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };

      fetch('/api/showData', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          //console.log('the acces_token is ', result[Object.keys(result)[0]]);
          this.accesToken = result[Object.keys(result)[0]];
          
          resolve(this.accesToken);
        })
        .catch((error) => console.log('error', error));
    });
  }
dpGetClientInfo(dpAccessToken:string){
      let dbx = new Dropbox({
        accessToken: dpAccessToken
      });
      console.log(JSON.stringify(dbx));
      dbx
        .usersGetCurrentAccount()
        .then(response => {
           console.log(JSON.stringify("First then" + response.result.email))
           localStorage.setItem('dpEmail',response.result.email)
           let getDpName = response.result.name.display_name
           let getDpEmail = response.result.email
           //userMnId is null
           let getUserMongoId = localStorage.getItem('userMnId')
           console.log("getUserMongoId is " + getUserMongoId)
           //connect to dpCloud mongodb
           sendDpClientInfo(getDpName,getDpEmail,getUserMongoId)
           return (getDpEmail)
          })
        .catch((err) => console.log(err))  
    
  }
  async dpGetFilesList(dpAccessToken:string){
    //encoder.htmlEncode(response.name.display_name)
    return await new Promise((resolve,reject) => {
      let holdelement = [];
      let dbx = new Dropbox({
       accessToken: dpAccessToken
     });
     //"recursive\": false,\"include_media_info\": false,\"include_deleted\": false,\"include_has_explicit_shared_members\": false,\"include_mounted_folders\": true,\"include_non_downloadable_files\": true
     console.log(JSON.stringify(dbx));
     dbx
     .filesListFolder({
      path: '',
      recursive: true
     })
       .then(response => {
         let hpldDpFiles = response.result.entries
         console.log( "hpldDpFiles " + JSON.stringify(hpldDpFiles[0].path_lower))
         for (let index = 0; index < hpldDpFiles.length; index++) {
           let holdObj = {};
            holdObj["dpClName"] = hpldDpFiles[index].name;
            holdObj["dpClPath"] = hpldDpFiles[index].path_lower;
            holdelement[index] = holdObj;  
         } 
         //console.log(JSON.stringify("Elements are " + JSON.stringify(holdelement)))
         return resolve(holdelement) 
         })
       .catch((err) => console.log(err)) 
         //console.log(JSON.stringify("Elements are " + holdelement))
    })
  }
  async dPDownloadFromNode() {
    return await new Promise((resolve,reject) => {
      fetch('/api/DPDownload', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((response) => {
          console.log(response)
          return resolve(response)
        })
        .catch((err) => console.log(err));
    })
  }   

  async dPUploadFromNode() {
    return await new Promise((resolve,reject) => {
      fetch('/api/DPUpload', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((response) => {
          alert("File is submitted to your Dropbox");
          console.log(response)
          return resolve(response);
        })
        .catch((err) => console.log(err));
    })
  }
  async dpPathFiles(dpPathGiven){
    console.log("dpPathFile is called" + dpPathGiven)
    return await new Promise((resolve, reject) => {
      let myHeaders = new Headers();
              myHeaders.append('Accept', '/');
              myHeaders.append('Origin', 'x-requested-with');
              myHeaders.append('Content-Type', 'application/json');
  
              let raw = JSON.stringify({
                title: 'dpPathfromAngular',
                dpGetFPath: dpPathGiven,
              });
              let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body:raw
              }; 
              fetch(
                '/api/DpPath',
                requestOptions
              )
                .then((response) =>
                  {return response.text()
                
                  })//verify this part
                .then(response => {return resolve(response)})
                .catch((err) => console.log('from dpPath ' + err))
    })
  } 
  
}
function sendDpClientInfo(getDbName,getDbEmail,getUserMongoId){
  console.log("sendDpClientInfo called ")
  let dbClientValue = JSON.stringify({
    dbname: getDbName,
    dbemail: getDbEmail,
    usermongoid: getUserMongoId, 
  })
  let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
  return fetch('/api/MCDbClient',{
    method: 'POST',
    headers: myHeaders,
    body: dbClientValue
  })
  .then(response => {return response.json()})
  .then(data => console.log(data))
  .catch(err => console.log(err))
}

