import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataservicesService } from 'src/app/dataservices.service';
import { environment } from 'src/environments/environment';
import { nodeModuleNameResolver } from 'typescript';
import { ServicesComponent } from '../services/services.component';


let valueStored: File = null;
let folder: object = {
  name: 'FileYellowTeamFromApp3',
  mimeType: 'application/octet-stream',
  parents: ['root'],
};
let showData: string;
let holdArray = []
let holdGlAccessToken = []

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
  
  storeID: any;
  isSignedIN = false;

  acces_Token: any;
  mdEvCh: any;
  svId = '1l23BYOU4UvTCX9IrTl84cQhHZEyXBR6A'

  constructor(private data: DataservicesService) {
    showData = this.data.getCodefromUri();
    console.log('showData is' + showData);
  }

  ngOnInit(): void {
    this.data
      .sendMessageToNode(showData)
      .then((data) => (this.acces_Token = data))
    //this.svId = holdArray
  }
  handleClientLoad() {
   // gapi.load('client:auth2', makeNewAccessToken)
    gapi.load('client:auth2', this.initClient)
  }
  onFileSelected(ev: Event) {
    try {
      let target = ev.target as HTMLInputElement
      let crFile: File = (target.files as FileList)[0]
      console.log('this currentEv ' + crFile.name)
      valueStored = crFile
      setValueStored(crFile)
    } catch (err) {
      console.log('err from try ', err)
    }
    return getValueStored();
  }
  initClient() {
    //let holdCurrent = getValueStored();
    //console.log('hold current is ' + holdCurrent.name);
     gapi.client
      .init({
        apiKey: 'AIzaSyBbTMmvECP0SsdRErSZRf51YzWC3oDR5cM',
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
        ],
        clientId:
          '375973183467-h5njr2s69i4q4ph3l3hup55t3irf3rnu.apps.googleusercontent.com',
        scope:
          'profile email https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata',
      })
      .then(() => {
        console.log("We are in Init1")
          signIn().then((value) => {
            console.log("We are in Init2")
         if (value == true) {
            getFiles()
            }
          })
         
        function getFiles() {
          gapi.client
            .request({
              method: 'GET',
              path:
                'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
            })
            .then(() => {
              //oAuthAccessToken()
              //exportGoogleDriveFiles()
              //uploadToGoogleDrive(holdCurrent)
              //createGoggleDriveFiles(folder)
              //accessTokenGoogleDrive(holdGlAccessToken[0])
              //getImageFromNode()
              //gDDownloadFromNode()
              //gDUploadFromNode()
              //listGoogleDriveFiles(holdGlAccessToken[0])
              //getGoogleDriveFiles() //example
              //copyGoogleDriveFiles()
              //}
            })
            .catch((err) =>
              console.log('Err from client request ' + JSON.stringify(err))
            );
        }
  }).catch((err) => console.log('Err from init ' + JSON.stringify(err)))
}
}
function gDDownloadFromNode() {
  fetch('/api/DownloadGd', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((response) => {return console.log(response)})
    .catch((err) => console.log(err));
} 
function gDUploadFromNode() {
  fetch('/api/UploadGd', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((response) => {return console.log(response)})
    .catch((err) => console.log(err));
} 
function getValueStored() {
  return valueStored
}
function setValueStored(valSt) {
  valueStored = valSt
}
function signIn (){
  let googleAuth = gapi.auth2.getAuthInstance()
  return googleAuth
    .signIn({
      prompt: 'consent',
    })
    .then((googleUser: gapi.auth2.GoogleUser) => {
      holdGlAccessToken.push(googleUser.getAuthResponse().access_token)
      //console.log('here before sign in' + JSON.stringify(googleUser.getAuthResponse().access_token))
      let appRepository = []
      appRepository.push(googleUser.getBasicProfile())
      console.log(
        'here is after signed in ...' + JSON.stringify(appRepository[0])
      )
      let newSiginedIn = true
      return newSiginedIn
    })
    .catch((err) => console.log('error from signin', err))
}
function createGoggleDriveFiles(fileToUpload: object) {
  return new Promise((resolve, reject) => {
    return gapi.client.drive.files
      .create({
        resource: fileToUpload,
        fields: 'id, name, mimeType, modifiedTime, size',
      })
      .then((value) => {
        console.log('files from ' + JSON.stringify(value.result.id));
        resolve(value.result.id);
        return value.result.id;
      })
      .catch((err) => console.log('Err from create ' + err));
  });
}
function getGoogleDriveFiles() {
  return gapi.client.drive.files
    .get({ fileId: '1R0eDNeswZBjOMrq0l3f2qE0EdCFfNQSW' })
    .then((value) =>
      console.log('from Create file ' + JSON.stringify(value.result))
    )
    .catch((err) =>
      console.log('Error from getting files' + JSON.stringify(err))
    )
}
async function listGoogleDriveFiles(holdgl:string) {
  console.log('holdgl list' + holdgl)
   return gapi.client.drive.files
    .list({
      fields:
        'nextPageToken, files(id, name, mimeType, modifiedTime, size, webContentLink)',
      q: "'root' in parents and trashed = false",
    })
    .then(async (res) => { 
            res.result.files.forEach(fl => {
              holdArray.push(fl.id);      
            })
            console.log('files from features' + JSON.stringify(holdArray))
          return holdArray;
        })
          .catch((err) => console.log('holdgl list' + holdgl))
}
function copyGoogleDriveFiles() {
  return gapi.client.drive.files
    .copy({
      fileId: '1_M5qsHokJemChghRK3QJniXWNy8WmjV2',
      supportsTeamDrives: true,
      supportsAllDrives: true,
      resource: {
        parents: ['root'],
        name: 'copiedtest2',
      },
    })
    .then((value) => console.log(JSON.stringify(value.result)))
    .catch((err) =>
      console.log('Error from getting files' + JSON.stringify(err))
    );
}
function uploadToGoogleDrive(file:File) {
  
  let metadata = {
    name: 'yellowTeamUpload', // Filename at Google Drive
    mimeType: 'text/plain', // mimeType at Google Drive
    parents: ['root'], // Folder ID at Google Drive
  };
  let accessToken = gapi.auth.getToken().access_token; // Here gapi is used for retrieving the access token.
  let form = new FormData();
  form.append(
    'metadata',
    new Blob([JSON.stringify(metadata)], { type: 'application/json' })
  );
  form.append('file', file);

  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Bearer ' + accessToken);

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: form,
  };

  fetch(
    'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id',
    requestOptions
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log('the file is submitted ', JSON.stringify(result));
    })
    .catch((error) => console.log('error', error));
}
function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));

  bytes.forEach((b) => binary += String.fromCharCode(b));

  return btoa(binary);
}
function makeNewAccessToken(){
  console.log("i am here")
  return gapi.auth2.authorize({
    client_id: '375973183467-h5njr2s69i4q4ph3l3hup55t3irf3rnu.apps.googleusercontent.com',
    scope: 'profile openid email  https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata',
    response_type: 'id_token permission'
  }, (response) => {
    if (response.error) {
      return console.log(response.error);
    }
    let accessToken = response.access_token
    console.log("accessToken from Function  " + accessToken )
    return accessToken
  })
}
function accessTokenGoogleDrive(saveDg:string){
  console.log('I am in features GDAccessToken Post ' + saveDg)
  return new Promise((resolve, reject) => {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      title: 'accessTokenfromAngular',
      accessTokenDg: saveDg
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch('/api/GDAcessToken', requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log('the acces_token is ', result[Object.keys(result)[0]]);
        let resultAccessToken = result[Object.keys(result)[0]];
        resolve(resultAccessToken);
      })
      .catch((error) => console.log('error', error));
  });
}
function getImageFromNode() {
  fetch('/api/ImageDg', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}

