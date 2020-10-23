import { Component, OnInit } from '@angular/core';
import { DataservicesService } from 'src/app/dataservices.service';
import { ServicesComponent } from '../services/services.component';
//import * as fs from 'fs';

// Working on Download from Google Drive

let valueStored: File = null;
let folder: object = {
  name: 'FileYellowTeamFromApp3',
  mimeType: 'application/octet-stream',
  parents: ['root'],
};
let showData: string;
let holdArray = [];

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
      .then((data) => (this.acces_Token = data));
    //this.svId = holdArray
  }
  handleClientLoad() {
    gapi.load('client:auth2', this.initClient);
  }
  onFileSelected(ev: Event) {
    try {
      let target = ev.target as HTMLInputElement;
      let crFile: File = (target.files as FileList)[0];
      console.log('this currentEv ' + crFile.name);
      valueStored = crFile;
      setValueStored(crFile);
    } catch (err) {
      console.log('err from try ', err);
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
          'profile email  https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata',
      })
      .then(() => {
        signIn().then((value) => {
          if (value == true) {
            getFiles();
          }
        });
        async function getFiles() {
          await gapi.client
            .request({
              method: 'GET',
              path:
                'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
            })
            .then(async () => {
              //exportGoogleDriveFiles()
              //uploadToGoogleDrive(holdCurrent);
              //createGoggleDriveFiles(folder);
              listGoogleDriveFiles();
              //getGoogleDriveFiles() //example
              //copyGoogleDriveFiles()
              //}
            })
            .catch((err) =>
              console.log('Err from client request ' + JSON.stringify(err))
            );
        }
      })
      .catch((err) => console.log('Err from init ' + JSON.stringify(err)));
  }
}
function getValueStored() {
  return valueStored;
}
function setValueStored(valSt) {
  valueStored = valSt;
}
function exportGoogleDriveFiles() {
  let myHeaders = new Headers();

  myHeaders.append('Accept', '/');
  myHeaders.append('Origin', 'x-requested-with');
  myHeaders.append('Content-Type', 'application/json');
  let requestOptions = {
    method: 'GET',
    //mode: 'no-cors'
    headers: myHeaders,
  };
  listGoogleDriveFiles().then((value) => {
    let storeShowAll = JSON.stringify(value);
    let element = '';
    for (let index = 0; index < storeShowAll.length; index++) {
      element += storeShowAll[index];
    }
    //setTimeout( () =>
    return fetch(
      'https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?id=' +
        element[0] +
        'export=download',
      requestOptions
    )
      .then((response) => console.log(response)) // I'll use response.blob().then( //doing something )
      .catch((err) => console.log('from Export ' + err));
    //, 4000)
  });
}
function signIn() {
  let newSiginedIn = true;

  const googleAuth = gapi.auth2.getAuthInstance();
  return googleAuth
    .signIn({
      prompt: 'consent',
    })
    .then((googleUser: gapi.auth2.GoogleUser) => {
      console.log('here before sign in');
      let appRepository = [];
      appRepository.push(googleUser.getBasicProfile());
      console.log(
        'here is after signed in ...' + JSON.stringify(appRepository[0])
      );
      newSiginedIn = true;
      return newSiginedIn;
    })
    .catch((err) => console.log('error from signin', err));
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
    .get({ fileId: '1l23BYOU4UvTCX9IrTl84cQhHZEyXBR6A' })
    .then((value) =>
      console.log('from Create file ' + JSON.stringify(value.result))
    )
    .catch((err) =>
      console.log('Error from getting files' + JSON.stringify(err))
    );
}
function listGoogleDriveFiles() {
  let myHeaders = new Headers();
  myHeaders.append('Accept', '/');
  myHeaders.append('Origin', 'x-requested-with');
  myHeaders.append('Content-Type', 'application/json');

  let requestOptions = {
    method: 'GET',
    //mode: 'no-cors'
    headers: myHeaders,
  };
  console.log('inside getfile');
  return gapi.client.drive.files
    .list({
      fields:
        'nextPageToken, files(id, name, mimeType, modifiedTime, size, webContentLink)',
      q: "'root' in parents and trashed = false",
    })
    .then((res) => {
      console.log('try to get files ..');
      res.result.files.forEach((file) => {
        fetch(
          'https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?id=' +
            file.id +
            '&export=download',
          requestOptions
        )
          .then((response) => console.log(response)) // I'll use response.blob().then( //doing something )
          .catch((err) => console.log('from Export ' + err));
        holdArray.push(file.id);
        //console.log('files from features' + JSON.stringify(holdArray))
      });
      return holdArray;
    })
    .catch((err) => console.log('Err from list' + err));
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

function uploadToGoogleDrive(file: File) {
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
