import { Component, OnInit } from '@angular/core';
import {ServicesComponent} from '../services/services.component';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {

  API_KEY = 'AIzaSyBbTMmvECP0SsdRErSZRf51YzWC3oDR5cM';
  CLIENT_ID:string = "375973183467-h5njr2s69i4q4ph3l3hup55t3irf3rnu.apps.googleusercontent.com";
  DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
  SCOPES:string = "profile email https://www.googleapis.com/auth/drive.appdata";
  storeID = [];

  constructor() { }
/* 
  ngOnInit(): void {
    
  } */
  handleClientLoad(){
    gapi.load('client:auth2', this.initClient)
  }
  
  initClient() {
   let isSignedIN = false;
      gapi.client.init({
        apiKey: 'AIzaSyBbTMmvECP0SsdRErSZRf51YzWC3oDR5cM',
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
        clientId: "375973183467-h5njr2s69i4q4ph3l3hup55t3irf3rnu.apps.googleusercontent.com",
        scope: "profile email  https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata"
      }).then(() => {
        signIn();
        isSignedIN = true;            
          function getFiles() {
           gapi.client.request({
              method: "GET",
              path: 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'})
              .then(() => {
                if(isSignedIN){
                createGoggleDriveFiles()
                //getGoogleDriveFiles()
                //listGoogleDriveFiles()
                //copyGoogleDriveFiles()
                }

              })
              .catch(err => console.log("Err from client request " + JSON.stringify(err)))
              }
              getFiles();
          })
          .catch(err => console.log("Err from init " + JSON.stringify(err)))        
      }
    }
        
 function signIn() {
  const googleAuth = gapi.auth2.getAuthInstance();
  return googleAuth.signIn({
    prompt: 'consent'
   })
   .then((googleUser: gapi.auth2.GoogleUser) => {
      console.log("here before sign in");
      let appRepository = [];
      appRepository.push(googleUser.getBasicProfile());
      console.log("here is after signed in ..." + JSON.stringify(appRepository[0]))
     })
     .catch(err => console.log("error from signin", err)) 
 }
  function createGoggleDriveFiles(){
    let folder = {
      name: "testfile4",
      mimeType: "application/octet-stream",
      parents: ["root"]
    };
    
    return gapi.client.drive.files.create({
      resource: folder,
      fields: "id, name, mimeType, modifiedTime, size"
  })
  .then((value) =>  {
    var fc = new FeaturesComponent();
    console.log("files from " + JSON.stringify(value.result.id))
    return fc.storeID.push(value.result.id);
  })
  .catch(err => console.log("Err from create " + err))
   
  }
  function getGoogleDriveFiles(){
    var fc = new FeaturesComponent();
    console.log("storeID is" + fc.storeID[0])
    return gapi.client.drive.files.get({fileId : fc.storeID[0]})
              .then((value) => console.log(JSON.stringify(value.result)))
              .catch( err =>  console.log("Error from getting files" + JSON.stringify(err)))
            
  }
  function listGoogleDriveFiles() {
   console.log("inside getfile")
  return gapi.client.drive.files.list({
      fields: "nextPageToken, files(id, name, mimeType, modifiedTime, size)",
      q: "'root' in parents and trashed = false"
  }).then((res) => {
      console.log("try to get files ..")
      const holdItems = [];
      res.result.files.forEach((file) => holdItems.push(file));
      console.log("files from features" + holdItems)
      return holdItems;
  }).catch(err => console.log("Err from list" + err))
}  
 function copyGoogleDriveFiles(){
  return gapi.client.drive.files.copy(
    {
      "fileId": "1_M5qsHokJemChghRK3QJniXWNy8WmjV2",
      "supportsTeamDrives": true,
      "supportsAllDrives": true,
      "resource": {
        "parents": [
          "root"
        ],
        "name": "copiedtest2"
      }
    } 
  )
  .then((value) => console.log(JSON.stringify(value.result)))
  .catch( err =>  console.log("Error from getting files" + JSON.stringify(err)))
 }

