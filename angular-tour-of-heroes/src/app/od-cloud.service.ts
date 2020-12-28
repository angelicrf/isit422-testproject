import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OdCloudService {
  profile: any;
  getOdAccessToken:any;
  issuedOdAccessToken:any;
  storeOdFiles = [];

constructor() { }
  login() {
    let odUrl = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=token&client_id=266792a9-b745-45e2-a76d-494d6720ebb8&redirect_uri=http://localhost:4200/filetransfer/&scope=https://graph.microsoft.com/Files.ReadWrite.All https://graph.microsoft.com/User.ReadWrite&state=null";
    let link = document.createElement('a');
    link.href = odUrl;
    link.click();
    }
 async getOdCodefromUri(){
   return await new Promise((resolve,reject) => {
      let displayFlsFiles:any = this.odDisplayFilesFlsProcess();  
      return resolve(displayFlsFiles);
   });
}
 async odDisplayFilesFlsProcess(){
  const uriLink:string = location.href;
  let findParam = uriLink.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];

  this.issuedOdAccessToken = await getOdAccessToken(findParam.toString());
  let profileClientInfo:any = await getProfile();
  console.log("profileClientInfo " + profileClientInfo);

  let hlOdName:string = profileClientInfo[1];
  console.log("hlOdName " + hlOdName);
  let formatlClName:string = hlOdName.split(",")[0];
  console.log("formatlClName " + formatlClName);
  let hlOdEmail:string = profileClientInfo[0];
  console.log("hlOdEmail " + hlOdEmail);
  localStorage.setItem("odClientEmail", profileClientInfo[0]);

  let mongoDbUserId:string = localStorage.getItem('userMnId');
  sendOdClientInfo(formatlClName.replace(/['"]+/g, '').toString(),hlOdEmail.toString(),mongoDbUserId);
  
  let odAallFiles:any = await this.odGetFiles();
  let holdOdItems:any = this.storeOdFlsFiles(odAallFiles);
  return holdOdItems;
}
 storeOdFlsFiles(odFilesFls:any){
  let savedOdFlsFolders = JSON.parse(odFilesFls);
  let storeOdFlsFolders:any = savedOdFlsFolders.value;
  
  for (let index = 0; index < storeOdFlsFolders.length; index++) {
    let holdOdItems = {};
    let getOdUrl = "@microsoft.graph.downloadUrl";
    holdOdItems["odFileName"] = storeOdFlsFolders[index].name;
    holdOdItems["odFileUrl"] = storeOdFlsFolders[index]["@microsoft.graph.downloadUrl"];
      
    this.storeOdFiles.push(holdOdItems);
  }
  return this.storeOdFiles;
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
          resolve(holdOdAllFlsFils);
      });  
  })
}
async odDownloadFile(odUrl:string,odFl:string) {
  return await new Promise((resolve,reject) => {
    fetch('/api/OdDownload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        odFileUrl: odUrl,
        odFileName: odFl 
      })
    })
       .then((result) => {
        return result.json();
       }) 
       .then(response => {
        let msgDisplay:any = response[Object.keys(response)[1]];
     
        resolve(msgDisplay);
      })
      .catch((err) => console.log(err));
  })
}
async odUploadFile(odFl:string) {
  return await new Promise((resolve,reject) => {
    fetch('/api/OdUpload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        odUpFileName: odFl 
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

async function getProfile() {
    return await new Promise((resolve,reject) => {
      fetch('/api/OdProfile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      })
         .then((result) => {
          return result.json();
         }) 
         .then(response => {
          let msgDisplay:any = response[Object.keys(response)[1]];
          let msgBxNameDisplay:any = response[Object.keys(response)[2]];
          let holdBxClInfo = [];
          holdBxClInfo.push(msgDisplay,msgBxNameDisplay);
          console.log("holdBxClInfo " + holdBxClInfo);
          resolve(holdBxClInfo)
        })
        .catch((err) => console.log(err));
    })
}
function sendOdClientInfo(getOdName:string,getOdEmail:string,getUserMongoId:string){

  let odClientValue = JSON.stringify({
    odname: getOdName,
    odemail: getOdEmail,
    usermongoid: getUserMongoId, 
  })
  let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
  return fetch('/api/MCOdClient',{
    method: 'POST',
    headers: myHeaders,
    body: odClientValue
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}

