import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { GdCloudService } from '../gd-cloud.service';
import { DpCloudService } from '../dp-cloud.service';
import { CheckCategories, buildFileListByFilter } from '../filetransfer/filterByFileType.js';
import { GDClientCredentials } from '../gdClientCredentials';
import { BxCloudService } from '../bx-cloud.service';
import { OdCloudService } from '../od-cloud.service';
let clFile: string[];
let showData: string;
let bxCode:string;
let retreiveDpFiles:any = {};
let holdClientFilesToDisplay:any = {};
let holdBoxAllFlsFl:any = {};
let boxFiles = [];
let holdBoxSelectedFile = [];
let holdOdSelectedFile = [];
let odFile = [];

@Component({
  selector: 'app-filetransfer',
  templateUrl: './filetransfer.component.html',
  styleUrls: ['./filetransfer.component.css']
})
export class FiletransferComponent implements OnInit {

  leftServiceForm = false;
  rightServiceForm = false;
  gdEmail:string = this.readLocalStorageValue('gdUserEmail');
  
  serviceIcons = [
    "assets/images/dropbox.png",
    "assets/images/googledrive.png",
    "assets/images/onedrive.png",
    "assets/images/box.png",
    "assets/images/folder.png"
  ];

  serviceNames = [
    "Dropbox",
    "Google Drive",
    "OneDrive",
    "Box",
    "Local Files"
  ]

  serviceAccounts = [
    localStorage.getItem('dpEmail'),
    localStorage.getItem('gdUserEmail'),
    localStorage.getItem('odClientEmail'),,
    localStorage.getItem('boxClientEmail'),
    localStorage.getItem('localFilePath')
  ]

  service1 = 0;
  service2 = 1;

  folders: string[] = []

  files1: string[] = [];
  files1Data: Buffer[] = [];
  
  files2: string[]= [];
  files2Data: Buffer[] = [];

  filters: string[];
  acces_Token: any;

  constructor(public filterService: FilterService,
    private gdService: GdCloudService, 
    private dpService: DpCloudService,
    private gdcl:GDClientCredentials,
    private bxService: BxCloudService, 
    private odService: OdCloudService) {
      //showData = this.dpService.getCodefromUri();
      //bxCode = this.bxService.getBoxCodefromUri();
      
    }

  ngOnInit(){
     this.getFilters();
     this.serviceAccounts[0] = localStorage.getItem('dpEmail')
  }

  readLocalStorageValue(key) {
    return localStorage.getItem(key)
  }

  async getLocalFiles(side) {
    let filePath = this.serviceAccounts[4];
    const files = await fetch('/api/Files', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        path: filePath
      })
    })
    .then(response => response.json())
    .then(data => {
      if(side === 'left') {
        data.names.forEach((name) => {
          if(this.service1 === 4) {
            this.files1.push(name);
            console.log(this.files1)
          }
        });
        data.files.forEach((file) => {
          if(this.service1 === 4) {
            this.files1Data.push(file);
          }
        });
      }
      else if(side === 'right') {
        data.names.forEach((name) => {
          if(this.service2 === 4) {
            this.files2.push(name);
          }
        });
        data.files.forEach((file) => {
          if(this.service2 === 4) {
            this.files2Data.push(file);
          }
        });
      }
      console.log(data)
    })
    .catch(err => console.log(err))
  }

  filterList(fil: string[], srv: number): string {
    let fList = "";
    let cnt = 0;
    fil.forEach((value, index) => {
      if(value.includes(this.serviceNames[srv])) {
        if(cnt != 0) {
          fList += ", " + value.substr(0, value.indexOf(" "));
        }
        else
          fList += value.substr(0, value.indexOf(" "));
        cnt++;
      }
    });
    //console.log("fList is " + fList);
    return fList;
  }

  async addLocalFiles(fileName: string, fileData: Buffer) {
    let filePath = this.serviceAccounts[4];
    const files = await fetch('/api/AddFiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        filePath: filePath,
        fileName: fileName,
        fileData: fileData
      })
    })
    .then(response => response.json())
    .catch(err => console.log(err))
  }

  async deleteLocalFiles(fileName: string, fileData: Buffer) {
    let filePath = this.serviceAccounts[4];
    const files = await fetch('/api/DeleteFiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        filePath: filePath,
        fileName: fileName,
        fileData: fileData
      })
    })
    .then(response => response.json())
    .catch(err => console.log(err))
  }

  async moveLocalFile(fileName: string) {
    let filePath = this.serviceAccounts[4];
    const files = await fetch('/api/MoveFile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        filePath: filePath,
        fileName: fileName
      })
    })
    .then(response => response.json())
    .then(
      
    )
    .catch(err => console.log(err))
  }

  getFilters(): void {
    this.filters = this.filterService.getFilters();
  }

  async drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      
      let itemName = event.container.data[event.currentIndex];
      
      // if coming from left container
      if(event.previousContainer.id === "left") {
          // if left container is set to local files
        if(this.service1 === 4) {
          //this.moveLocalFile(this.serviceAccounts[4] + '/' + this.files2[0]);
        }
      }

      // if going to left container
      if(event.container.id === 'left') {
        // if right is dropbox and left is google drive
        if(this.service2 === 0 && this.service1 === 1) {
          //Download and then upload to dp
          let storePath = (this.files1[0]).toString();
          console.log( "this.files1 " + this.files1)
          let holdLowerpath = []
          let keys = Object.keys(retreiveDpFiles);
          for(let i = 0; i < keys.length; i++){
            if(retreiveDpFiles[i].dpClName === storePath.toString() ) {
              holdLowerpath.push(retreiveDpFiles[i].dpClPath)
            }
          } 
          console.log( "inside the looptwo");
          await this.dpService.dpPathFiles(holdLowerpath[0]);
          console.log( "inside the loop");
          await this.dpService.dPDownloadFromNode();
          await this.gdService.gDUploadFromNode();
          setTimeout(async() => {await this.gdService.gDUpdateFileName()}, 5000);
        }
        // if right is dropbox and left is local
        if(this.service2 === 0 && this.service1 === 4) {
          //Download
          let storePath = (this.files1[0]).toString();
          console.log( "this.files1 " + this.files1)
          let holdLowerpath = []
          let keys = Object.keys(retreiveDpFiles);
          for(let i = 0; i < keys.length; i++){
              if(retreiveDpFiles[i].dpClName === storePath.toString() ) {
                holdLowerpath.push(retreiveDpFiles[i].dpClPath)
              }
          } 
          console.log( "inside the looptwo");
          await this.dpService.dpPathFiles(holdLowerpath[0]);
          console.log( "inside the loop");
          await this.dpService.dPDownloadLocalFromNode();
        }
        // if right is google drive and left is dropbox
        if(this.service2 === 1 && this.service1 === 0) {
          console.log( "this.files1[0] " + this.files1[0])
          let gdStoreName = (this.files1[0]).toString();
          let holdGdIdFiles = [];
          let keys = Object.keys(holdClientFilesToDisplay);
          for (let index = 0; index < keys.length; index++) {
            if(holdClientFilesToDisplay[index].gdClName === gdStoreName.toString() ) {
              console.log( "inside the loop");
              holdGdIdFiles.push(holdClientFilesToDisplay[index].gdClId)
            }   
          }
          await this.gdService.getGdId(holdGdIdFiles[0],gdStoreName );
          let gdDownloadResult:any = await this.gdService.gDDownloadFromNode();
          console.log("gdDownloadResult " + gdDownloadResult); 
          await this.dpService.dPUploadFromNode()   
        }
        // if right is google drive and left is local
        if(this.service2 === 1 && this.service1 === 4) {
          console.log("this.files1[0] " + this.files1[0])
          let gdStoreName = (this.files1[0]).toString();
          let holdGdIdFiles = [];
          let keys = Object.keys(holdClientFilesToDisplay);
          for (let index = 0; index < keys.length; index++) {
            if(holdClientFilesToDisplay[index].gdClName === gdStoreName.toString() ) {
              console.log( "inside the loop");
              holdGdIdFiles.push(holdClientFilesToDisplay[index].gdClId)
            }   
          }
          await this.gdService.getGdId(holdGdIdFiles[0],gdStoreName );
          let gdDownloadResult:any = await this.gdService.gDDownloadLocalFromNode();
          console.log("gdDownloadResult " + gdDownloadResult);
        }
        // if right is local and left is Dropbox
        if(this.service2 === 4 && this.service1 === 0) {
          await this.dpService.dPUploadLocalFromNode(this.files1[0])
        }// if right is local and left is Google Drive
        if( this.service2 === 4 && this.service1 === 1) {
          await this.gdService.gDUploadLocal(this.files1[0]);
          setTimeout(async() => {await this.gdService.gDUpdateLocalFileName()}, 5000);
        }
      }

      // if coming from right container
      if(event.previousContainer.id === "right") {

      }

      // if going to right container
      if(event.container.id === 'right') {
        // if left is dropbox and right is google drive
        if(this.service1 === 0 && this.service2 === 1) {
          //Download and then upload to dp
          // console.log( "this.files2[0] " + this.files2[0])
          let storePath = (this.files2[0]).toString();
          console.log( "this.files2 " + this.files2)
          let holdLowerpath = []
          let keys = Object.keys(retreiveDpFiles);
          for(let i = 0; i < keys.length; i++){
            //for (let index = 0; index < (this.files2).length; index++) {
              //console.log( "inside the loop one ")
              if(retreiveDpFiles[i].dpClName === storePath.toString() ) {
                holdLowerpath.push(retreiveDpFiles[i].dpClPath)
              }
          } 
          //console.log( "holdLowerpath " + holdLowerpath)
          // for (let index = 0; index < holdLowerpath.length; index++){  
          //  setInterval(async () => {
          console.log( "inside the looptwo");
          await this.dpService.dpPathFiles(holdLowerpath[0]);
          console.log( "inside the loop");
          await this.dpService.dPDownloadFromNode();
          await this.gdService.gDUploadFromNode();
          setTimeout(async() => {await this.gdService.gDUpdateFileName()}, 5000);
        }
        // if left is dropbox and right is local
        if(this.service1 === 0 && this.service2 === 4) {
          //Download
          let storePath = (this.files2[0]).toString();
          console.log( "this.files2 " + this.files2)
          let holdLowerpath = []
          let keys = Object.keys(retreiveDpFiles);
          for(let i = 0; i < keys.length; i++){
              if(retreiveDpFiles[i].dpClName === storePath.toString() ) {
                holdLowerpath.push(retreiveDpFiles[i].dpClPath)
              }
          } 
          console.log( "inside the looptwo");
          await this.dpService.dpPathFiles(holdLowerpath[0]);
          console.log( "inside the loop");
          await this.dpService.dPDownloadLocalFromNode();
        }
        // if left is google drive and right is drop box
        if(this.service1 === 1 && this.service2 === 0) {
          console.log("this.files2[0] " + this.files2[0])
          let gdStoreName = (this.files2[0]).toString();
          let holdGdIdFiles = [];
          let keys = Object.keys(holdClientFilesToDisplay);
          for (let index = 0; index < keys.length; index++) {
            if(holdClientFilesToDisplay[index].gdClName === gdStoreName.toString() ) {
              console.log( "inside the loop");
              holdGdIdFiles.push(holdClientFilesToDisplay[index].gdClId)
            }   
          }
          await this.gdService.getGdId(holdGdIdFiles[0],gdStoreName );
          let gdDownloadResult:any = await this.gdService.gDDownloadFromNode();
          console.log("gdDownloadResult " + gdDownloadResult); 
          await this.dpService.dPUploadFromNode()  
        }
        // if left is google drive and right is local
        if(this.service1 === 1 && this.service2 === 4) {
          console.log("this.files2[0] " + this.files2[0])
          let gdStoreName = (this.files2[0]).toString();
          let holdGdIdFiles = [];
          let keys = Object.keys(holdClientFilesToDisplay);
          for (let index = 0; index < keys.length; index++) {
            if(holdClientFilesToDisplay[index].gdClName === gdStoreName.toString() ) {
              console.log( "inside the loop");
              holdGdIdFiles.push(holdClientFilesToDisplay[index].gdClId)
            }   
          }
          await this.gdService.getGdId(holdGdIdFiles[0],gdStoreName );
          let gdDownloadResult:any = await this.gdService.gDDownloadLocalFromNode();
          console.log("gdDownloadResult " + gdDownloadResult);
        }
        // if left is local and right is Google Drive
        if(this.service1 === 4 && this.service2 === 1) {
          await this.gdService.gDUploadLocal(this.files2[0]);
          setTimeout(async() => {await this.gdService.gDUpdateLocalFileName()}, 5000);
        }
        // if left is local and right is Dropbox
        if(this.service1 === 4 && this.service2 === 0) {
          await this.dpService.dPUploadLocalFromNode(this.files2[0])
        }
        if(this.service1 === 3){
          let holdBoxFile = this.files2[0];
          console.log("holdBoxFile " + holdBoxFile);
          let keys = Object.keys(boxFiles);
          for(let i = 0; i < keys.length; i++){
              if(boxFiles[i].bxFileName === holdBoxFile.toString() ) {
                holdBoxSelectedFile.push(boxFiles[i].bxFileId,boxFiles[i].bxFileName )
              }
          } 
          console.log("holdBoxSelectedFile " + holdBoxSelectedFile);
          await this.bxService.boxDownload(holdBoxSelectedFile[0],holdBoxSelectedFile[1]);
          await this.bxService.boxUpload(holdBoxSelectedFile[1]); 
        }
        if(this.service1 === 2){
          let holdOdFile = this.files2[0];
          console.log("holdodFile " + holdOdFile);
          let keys = Object.keys(odFile);
          for(let i = 0; i < keys.length; i++){
              if(odFile[i].odFileName === holdOdFile.toString() ) {
                holdOdSelectedFile.push(odFile[i].odFileUrl,odFile[i].odFileName )
              }
          } 
          console.log("holdOdSelectedFile " + holdOdSelectedFile);
          await this.odService.odDownloadFile(holdOdSelectedFile[0],holdOdSelectedFile[1]);
          //await this.bxService.boxUpload(holdBoxSelectedFile[1]); 
        }
      }
    }
  }

  clientEmailValue(v: string) {
    if(localStorage.getItem('gdUserEmail') == null){
      this.gdEmail = v;
    localStorage.setItem('gdUserEmail', this.gdEmail);
    console.log('the value from set2 ' + this.gdEmail)
    }else if(localStorage.getItem('gdUserEmail') !== v){
      localStorage.removeItem('gdUserEmail')
      this.gdEmail = v;
      localStorage.setItem('gdUserEmail', this.gdEmail);
    console.log('the value from set2 ' + this.gdEmail)
    }else this.gdEmail = localStorage.getItem('gdUserEmail')
  }

  async getClientEmail(){
    return await this.clientEmailValue(this.gdcl.holdDataClient[0])
  }

  async googleDriveInit(){
    //this.googleDriveForm = true
    let holdPromise = await this.gdService.googleImplementCallBack()
    console.log("HoldPromises " + holdPromise)
    let holdUserData = await this.getClientEmail()
    console.log("holdUserData " + holdUserData)
  }
  
  // /** Predicate function that only allows filtered types to be dropped into a list */
  // async filterPredicate(item: CdkDrag<String>, list: CdkDropList) {
  //   var re = /(?:\.([^.]+))?$/;
    
  //   if(list.id === "left") {
  //     console.log("left")
  //     // if(this.filters.length > 0 && this.filters.includes(this.serviceNames[this.service1])) {
  //     //   let check = re.exec(item.data.toString())[1];
  //     //   console.log(check);
  //     //   if(CheckCategories(check)) {
  //     //     return true;
  //     //   }
  //     //   else return false;
  //     // }
  //   }
  //   if(list.id === "right") {
  //     let filterName = this.filterList(this.filters, this.service2);
  //     //
  //     if(filterName) {
  //       console.log("right")
  //       //let check = re.exec(item.data.toString())[1];
  //       // console.log(check);
  //       // if(CheckCategories(check)) {
  //       //   return true;
  //       // }
  //       // else return false;
  //     }   
  //   }
  // }

  async getFiles() {
    console.log("getFiles called")
    return await new Promise(async(resolve,reject) => {
     /*  return gapi.client
      .request({
        method: 'GET',
        path:
          'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
      })
      .then(async () => { */
        console.log("getFiles called two")
        let displayItems:any = await this.gdService.listGoogleDriveFiles();   
          
        return resolve(displayItems);
      //})
    }) 
  }

  // display files from Google Drive
  async displayClientFiles(side){
    if(side === "left") {
      holdClientFilesToDisplay = await this.getFiles()
      // console.log("displayClientFiles " + JSON.stringify(holdClientFilesToDisplay));
       let keys = Object.keys(holdClientFilesToDisplay);
       for(let i = 0; i < keys.length; i++){
            this.files1.push((holdClientFilesToDisplay[i].gdClName));
      };
       return this.files1
    }
    if(side === "right") {
      holdClientFilesToDisplay = await this.getFiles()
      // console.log("displayClientFiles " + JSON.stringify(holdClientFilesToDisplay));
       let keys = Object.keys(holdClientFilesToDisplay);
       for(let i = 0; i < keys.length; i++){
            this.files2.push((holdClientFilesToDisplay[i].gdClName));
      };
       return this.files2
    }
  }

  async dpProcessFiles(side){
  let displayResult:any = await this.dpService.sendMessageToNode(showData)
  this.dpService.dpGetClientInfo(displayResult)

  retreiveDpFiles = await this.dpService.dpGetFilesList(displayResult)

  let filterName = this.filterList(this.filters, this.service1);
  let holdArrayRetrieved = []
  //condition to filter
  if(filterName === null || filterName === ""){
  let keys = Object.keys(retreiveDpFiles);
  for(let i = 0; i < keys.length; i++){   
    holdArrayRetrieved.push(retreiveDpFiles[i].dpClName)
    if(side === "left")
      this.files1.push((holdArrayRetrieved[i]));
    if(side === "right")
      this.files2.push((holdArrayRetrieved[i]));
  }
  }
  else{
    let keys = Object.keys(retreiveDpFiles);
  for(let i = 0; i < keys.length; i++){   
    holdArrayRetrieved.push(retreiveDpFiles[i].dpClName)
  }
    let newFilteredFiles = buildFileListByFilter(filterName, holdArrayRetrieved )
  console.log("newFilteredFiles " + newFilteredFiles)
    let storedFiles = holdArrayRetrieved.filter(
      element => element.indexOf('.') != -1
    )
    for(let i = 0; i < newFilteredFiles.length; i++){
      if(side === "left")
        this.files1.push((newFilteredFiles[i])); 
      if(side === "right")
        this.files2.push((newFilteredFiles[i])); 
    };
    let intersection: string[] = holdArrayRetrieved.filter(
      element => !newFilteredFiles.includes(element) && !storedFiles.includes(element)  
      );
      console.log("intersection " + intersection)
    for (let index = 0; index < intersection.length; index++) {
      this.folders.push(intersection[index]);   
    }
  }
  this.removeUrlParams();
  }

  // TODO: get the file id to pass into request
  async removeGDFile() {
    return await new Promise((resolve,reject) => {
      return gapi.client
      .request({
        method: 'DELETE',
        path: 'https://www.googleapis.com/upload/drive/v3/files/',
      })
      .then(async () => {
        console.log('Removed')
      })
    }) 
  }
  removeUrlParams(){
    return window.history.replaceState(null, null, window.location.pathname);
  }
  async boxProcessFiles(){
    await this.bxService.getboxCodeOauth(bxCode);
    await this.bxService.issueBoxAccessToken();
    let storeBxEmail:any = await this.bxService.getBoxClientEmail();
    localStorage.setItem("boxClientEmail", storeBxEmail );
    this.removeUrlParams();
    holdBoxAllFlsFl = await this.bxService.boxAllFoldersFiles();
    this.boxDisplayFoldersFiles();
    
  /*  await this.bxService.boxShowFile(); */
  }
  boxDisplayFoldersFiles(){
    let savedFlsFolders = JSON.parse(holdBoxAllFlsFl);
    let storeFlsFolders:any = savedFlsFolders.item_collection.entries;
    for (let index = 0; index < storeFlsFolders.length; index++) {
      let holdBoxItems = {};
      if(storeFlsFolders[index].type === "folder"){
        this.folders.push(storeFlsFolders[index].name);
      }
      else{
        holdBoxItems["bxFileName"] = storeFlsFolders[index].name;
        holdBoxItems["bxFileId"] = storeFlsFolders[index].id;
        console.log("holdBoxItems bxFileId " + holdBoxItems["bxFileId"]);
        boxFiles.push(holdBoxItems);
        this.files1.push(storeFlsFolders[index].name);
      }
      } 
  }
  async odDisplayFiles(){
    let showAllOdFlsFiles:any = await this.odService.getOdCodefromUri();
    console.log("showAllOdFlsFiles " + showAllOdFlsFiles + "Name " + showAllOdFlsFiles[0].odFileName);
    let runAllOdFlsFiles:any = await this.odFilesFls(showAllOdFlsFiles);

  }
  async odFilesFls(odFlsFiles:any){
    return await new Promise((resolve,reject) =>{
      let storeOdItemsInArray:string[] = [];
      let key = Object.values(odFlsFiles);

      for (let index = 0; index < key.length; index++) {
        odFile.push(odFlsFiles[index]);
        storeOdItemsInArray.push(odFlsFiles[index].odFileName); 
      }
 
      let odFilesStored:any = storeOdItemsInArray.filter(el => el.indexOf('.') != -1);
      let odFolderStored:any = storeOdItemsInArray.filter(el => el.indexOf('.') === -1);
      
      console.log("odFilesStored is " + odFilesStored + "odFolderStored " + odFolderStored );
      for (let index = 0; index < odFilesStored.length; index++) {
        this.files1.push(odFilesStored[index]);
      }
      for (let index = 0; index < odFolderStored.length; index++) {
        this.folders.push(odFolderStored[index])
      }  
      return resolve(this.files1);
    })
  }

}

