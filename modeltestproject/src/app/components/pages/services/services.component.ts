import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  oauthToken:any;

  constructor() { }

/*   ngOnInit():void{
    ServicesComponent.fromGoogleFile(ServicesComponent.file);
  } */
   loadPicker() {
    gapi.load('auth', {'callback': this.onAuthApiLoad});
    gapi.load('picker', {'callback': this.onPickerApiLoad});
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
  
   onPickerApiLoad() {
    let pickerApiLoaded = true;
    createPicker
  }
}

function handleAuthResult(authResult){
 let sv = new ServicesComponent();
 
  if (authResult && !authResult.error) {
   sv.oauthToken =  authResult.access_token;
    createPicker(sv.oauthToken)
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
