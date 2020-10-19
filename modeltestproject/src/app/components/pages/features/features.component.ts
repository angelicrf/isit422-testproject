import { Component, OnInit } from '@angular/core';
import { DataservicesService } from 'src/app/dataservices.service';
import {ServicesComponent} from '../services/services.component';
import {ChildProcessService} from 'ngx-childprocess';
 

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit  {

  API_KEY = 'AIzaSyBbTMmvECP0SsdRErSZRf51YzWC3oDR5cM';
  CLIENT_ID:string = "375973183467-h5njr2s69i4q4ph3l3hup55t3irf3rnu.apps.googleusercontent.com";
  DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
  SCOPES:string = "profile email https://www.googleapis.com/auth/drive.appdata";
  storeID:any;
  isSignedIN = false;
  showData:string;
  acces_Token:any;

  constructor(private data: DataservicesService) { 
    this.showData = this.data.getCodefromUri()
    console.log("showData is" + this.showData)  
   }

  ngOnInit():void {
    this.data.sendMessageToNode(this.showData)
    .then(data =>  this.acces_Token = data)
  } 
  
  handleClientLoad(){
    gapi.load('client:auth2', this.initClient)
  }
 
  initClient() {
      gapi.client.init({
        apiKey: 'AIzaSyBbTMmvECP0SsdRErSZRf51YzWC3oDR5cM',
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
        clientId: "375973183467-h5njr2s69i4q4ph3l3hup55t3irf3rnu.apps.googleusercontent.com",
        scope: "profile email  https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.appdata"
      }).then(() => {
        signIn().then(value => {
           if(value == true){
          getFiles()
        }});          
          async function getFiles() {
           await gapi.client.request({
              method: "GET",
              path: 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'})
              .then(async () => {
                createGoggleDriveFiles()
                listGoogleDriveFiles()
                //getGoogleDriveFiles()
                //copyGoogleDriveFiles()
                //}
              })
              .catch(err => console.log("Err from client request " + JSON.stringify(err)))
              }
          })
          .catch(err => console.log("Err from init " + JSON.stringify(err)))        
      }
    }
    
 function signIn() {

   let newSiginedIn = true;

  const googleAuth = gapi.auth2.getAuthInstance();
  return googleAuth.signIn({
    prompt: 'consent'
   })
   .then((googleUser: gapi.auth2.GoogleUser) => {
      console.log("here before sign in");
      let appRepository = [];
      appRepository.push(googleUser.getBasicProfile());
      console.log("here is after signed in ..." + JSON.stringify(appRepository[0]))
      newSiginedIn = true;
      return newSiginedIn;    
     })
     .catch(err => console.log("error from signin", err)) 
 }
  function createGoggleDriveFiles(){
    return new Promise((resolve, reject) =>
    {
    let folder = {
      name: "YellowTeamTestfile",
      mimeType: "application/octet-stream",
      parents: ["root"]
    };
    
    return gapi.client.drive.files.create({
      resource: folder,
      fields: "id, name, mimeType, modifiedTime, size"
  })
  .then((value) =>  {
    console.log("files from " + JSON.stringify(value.result.id))
    resolve(value.result.id);
    return value.result.id;
  })
  .catch(err => console.log("Err from create " + err))
})
   
  }
  function getGoogleDriveFiles(){
  let getStoreId = createGoggleDriveFiles().then(
     data => console.log("storID from getGoogleDriveFiles " + data)
   )
    console.log("storeID is" + getStoreId)
    return gapi.client.drive.files.get({fileId : JSON.stringify(getStoreId)})
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
      console.log("files from features" + JSON.stringify(holdItems))
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

