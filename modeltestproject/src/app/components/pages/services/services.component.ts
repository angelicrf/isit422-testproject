import { Component, OnInit } from '@angular/core';
import unfetch from 'unfetch';
import { Dropbox } from '../../../../../node_modules/dropbox';
import { DataservicesService } from '../../../dataservices.service';
//import {FeaturesComponent} from '../features/features.component';
import dropboxPicker from 'dropbox-file-picker';

let holdData = []
let extensions = ['png', 'jpg', '.gif']
let impAccTK = ''
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  oauthToken: any;

  constructor(private data: DataservicesService) {}
  showCode: string;

  ngOnInit(): void {
    this.showCode = this.data.getCodefromUri();
  }

  handleDropboxClientLoad() {
    gapi.load('client:auth2', this.createDpPicker);
  }
  createDpPicker() {
    //this.data.dPUploadFromNode()
    
    impAccTK = this.data.accesToken;
    console.log('from service impAccTK ' + impAccTK);
   /*  var dbx = new Dropbox({
      accessToken: impAccTK,
      fetch: unfetch,
    });
    console.log(JSON.stringify(dbx));
    dbx
      .filesListFolder({
        path: '',
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err)) */
     this.dropBoxPicker(impAccTK)
  }
  // show files and folders from drpbox file picker
  loadPicker() {
    gapi.load('auth', { callback: this.onAuthApiLoad });
    gapi.load('picker', { callback: onPickerApiLoad });
  }
 dropBoxPicker(dpAccessTok){
   /*   let extension = 'file.extension'
     for (let index = 0; index < extensions.length; index++) {
       if (extensions[index] == extension){
         return extension
       }else
       return console.log('the extension doesnt exist')   
     } */
        dropboxPicker.open(
          {  accessToken: dpAccessTok,
            //allowedExtensions: extensions, // like ['png', 'jpg', '.gif'] (with or without dot)
            allowFolderSelection: true, // folder selection 
            isMultiple: true, // multiple entries (files/folders) selection
            loadPreviews: true, // load preview for supported image formats ('jpg', 'jpeg', 'png', 'tiff', 'tif', 'gif', 'bmp')
            hideCountLabel: false, // show or hide label 'You've selected * entries' (defaults to 'false')
            hideCheckboxes: false, // hide checkboxes (defaults to 'false')
            rows: 4, // rows count in grid mode (defaults to 4, min 1, max 10)
            defaultLayout: 'list', // layout mode (defaults to 'list', supported values: 'list', 'grid')
            //disableLayoutSelection: true, // ability to select layout mode (defaults to 'false')
            width: '700px', // custom width (defaults to '50%', supported values: any css width value)
            previewSettings: {
                size: 'w64h64', // preview size (default "w64h64")
            },
            localization: { 
                title: 'Dropbox', 
                cancel: 'Cancel', 
                choose: 'Choose', 
                entriesSelectionLabel: `You\'ve selected {0} entries` 
            }  
      })
        .then(result => 
          {
            alert(JSON.stringify(result[Object.keys(result)[0]].path_display))
            let dpPath = result[Object.keys(result)[0]].path_display
            //console.log("dppath of a file " + dpPath )
            dpPathFiles(dpPath)
            this.data.dPDownloadFromNode()
          }) 
            // .catch (error => console.log('error from dropbox picker ' + error)       
 }
      onAuthApiLoad() {
        gapi.auth.authorize(
          {
            client_id:
              '375973183467-h5njr2s69i4q4ph3l3hup55t3irf3rnu.apps.googleusercontent.com',
            scope: ['https://www.googleapis.com/auth/drive.file'],
            immediate: false,
          },
          handleAuthResult
        );
      }
}
function onPickerApiLoad() {
  let pickerApiLoaded = true;
  createPicker;
}
function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    let oauthToken = authResult.access_token;
    createPicker(oauthToken);
  }
}
function createPicker(storedOauth) {
  let pickerApiLoaded = true;
  console.log('value of OauthToken ' + storedOauth);

  if (pickerApiLoaded && storedOauth) {
    var picker = new google.picker.PickerBuilder()
      .enableFeature(google.picker.Feature.NAV_HIDDEN)
      .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
      .setAppId('375973183467')
      .setOAuthToken(storedOauth)
      .addView(google.picker.ViewId.DOCS)
      .addView(google.picker.ViewId.IMAGE_SEARCH)
      .addView(google.picker.ViewId.PRESENTATIONS)
      .addView(google.picker.Type.URL)
      .addView(google.picker.Document.TYPE)
      .addView(google.picker.Document.URL)
      .addView(new google.picker.DocsUploadView())
      .setDeveloperKey('AIzaSyBbTMmvECP0SsdRErSZRf51YzWC3oDR5cM')
      .setCallback(pickerCallback)
      .build();
    picker.setVisible(true);
  }
}
function pickerCallback(data) {
  if (data.action == google.picker.Action.PICKED) {
    let fileId = data.docs[0].id
    let mimeType = data.docs[0].mimeType
    let size = data.docs[0].size
    let newob = {newFi: '' , newSize: '', newMit : ''}

    holdData.push(
      newob.newFi = fileId,
      newob.newSize = size,
      newob.newMit = mimeType)
    
      let myHeaders = new Headers();
      myHeaders.append('Accept', '/');
      myHeaders.append('Origin', 'x-requested-with');
      myHeaders.append('Content-Type', 'application/json');

      let raw = JSON.stringify({
        title: 'codefromAngular',
        gdSaveId: fileId,
      });
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body:raw
      }; 
      fetch(
        '/api/GdId',
        requestOptions
      )
        .then((response) =>
          response.text()
              )
        .catch((err) => console.log('Error from GDId ' + err));
    alert('The user selected: ' + JSON.stringify(fileId));
    //gDDownloadFromNode()
    //gDUploadFromNode()
  }
}
function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));

  bytes.forEach((b) => binary += String.fromCharCode(b));

  return btoa(binary);
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
function dpPathFiles(dpPathGiven){
  console.log("dpPathFile is called" + dpPathGiven)
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
                response.text()
                    )
              .catch((err) => console.log('from dpPath ' + err))
}
