import { Component, OnInit } from '@angular/core';
import unfetch from 'unfetch';
import { Dropbox } from '../../../../../node_modules/dropbox';
import { DataservicesService } from '../../../dataservices.service';
//import {FeaturesComponent} from '../features/features.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit  {

  oauthToken:any;

  constructor(private data: DataservicesService) { }
  showCode:string;
  
   ngOnInit():void{
     this.showCode = this.data.getCodefromUri()
   }

  handleDropboxClientLoad(){
    gapi.load('client:auth2', this.createDpPicker)
  }
  createDpPicker(){
    let impAccTK = this.data.accesToken;
    console.log("from service impAccTK " + impAccTK)
        var dbx = new Dropbox({
          accessToken: impAccTK,
          fetch:unfetch });
         console.log(JSON.stringify(dbx))
        dbx.filesListFolder({
        path: ''
       
      })
      .then(response => console.log(response))
      .catch(err => console.log(err))
   }
   // show files and folders from drpbox file picker
   loadPicker() {
    gapi.load('auth', {'callback': this.onAuthApiLoad});
    gapi.load('picker', {'callback': onPickerApiLoad});
  }
  
   onAuthApiLoad() {
    gapi.auth.authorize(
        {
          'client_id': "375973183467-h5njr2s69i4q4ph3l3hup55t3irf3rnu.apps.googleusercontent.com",
          'scope': ['https://www.googleapis.com/auth/drive.file'],
          'immediate': false
        },
        handleAuthResult);
  }
 
}
function onPickerApiLoad() {
  let pickerApiLoaded = true;
  createPicker
}
function handleAuthResult(authResult){
if (authResult && !authResult.error) {
    let oauthToken =  authResult.access_token;
 createPicker(oauthToken)
}
}
function createPicker(storedOauth){
  let pickerApiLoaded = true;
  console.log("value of OauthToken " + storedOauth)

  if (pickerApiLoaded && storedOauth) {
  var picker = new google.picker.PickerBuilder()
      .enableFeature(google.picker.Feature.NAV_HIDDEN)
      .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
      .setAppId("375973183467")
      .setOAuthToken(storedOauth)
      .addView(google.picker.ViewId.DOCS)
      .addView(google.picker.ViewId.IMAGE_SEARCH)
      .addView(google.picker.ViewId.PRESENTATIONS)
      //.addView(new google.picker.DocsUploadView())
      .setDeveloperKey("AIzaSyBbTMmvECP0SsdRErSZRf51YzWC3oDR5cM")
      .setCallback(pickerCallback)
      .build();
   picker.setVisible(true);
}
}
function pickerCallback(data) {
if (data.action == google.picker.Action.PICKED) {
  var fileId = data.docs[0].id;
  alert('The user selected: ' + fileId);
}
}
