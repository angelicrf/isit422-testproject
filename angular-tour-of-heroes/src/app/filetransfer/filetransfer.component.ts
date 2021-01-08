import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { GdCloudService } from '../gd-cloud.service';
import { DpCloudService } from '../dp-cloud.service';
import { CheckCategories, buildFileListByFilter } from '../filetransfer/filterByFileType.js';
import { GDClientCredentials } from '../gdClientCredentials';
import { BxCloudService } from '../bx-cloud.service';
import { OdCloudService } from '../od-cloud.service';
import { LocalFilesService } from '../local-files.service';

let clFile: string[];
let showData: string;
let bxCode:any;
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
  storedApi = JSON.parse(localStorage.getItem("apiSelected"));
  
  gdApiSelected:boolean = false;
  dpApiSelected:boolean = false;
  odApiSelected:boolean = false;
  bxApiSelected:boolean = false;
  flApiSelected:boolean = false;

  serviceIcons = [
    "assets/images/dropbox.png",
    "assets/images/googledrive.png",
    "assets/images/onedrive.png",
    "assets/images/box.png",
    "assets/images/folder.png"
  ];

  serviceNames = [
    'Dropbox',
    'GoogleDrive',
    'OneDrive',
    'Box',
    'LocalFiles'
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
    private odService: OdCloudService,
    private lfService: LocalFilesService) {this.filters = [];}

async ngOnInit(){
  if("apiFileFilter" in localStorage){
     console.log("inside OnInt filetransfer");
    this.getFilters();
  }
     this.serviceAccounts[0] = localStorage.getItem('dpEmail');
    
  }
findMatch(firstArray:string[], itemToFound:string ){
   const ARRAYLENGTH = firstArray.length;
   for (let index = 0; index < ARRAYLENGTH; index++) {
     if(firstArray.includes(itemToFound)){
         if(itemToFound === "Dropbox"){
          this.dpApiSelected = true;
         }
         if(itemToFound === "GoogleDrive"){
          this.gdApiSelected = true;
         }
         if(itemToFound === "OneDrive"){
          this.odApiSelected = true;
         }
         if(itemToFound === "Box"){
          this.bxApiSelected = true;
         }
         if(itemToFound === "LocalFiles"){
          this.flApiSelected = true;
         }
     }
   }
  }
  apiMatch(){
    let holdApiSelected = [];
    holdApiSelected = this.storedApi;   
    for (let index = 0; index < this.serviceNames.length; index++) {
      console.log("inside storeApi if " + holdApiSelected  );
      this.findMatch(holdApiSelected,this.serviceNames[index]);     
    }
    this.removeLocalStorageValue("apiSelected");
  } 
  readLocalStorageValue(key) {
    return localStorage.getItem(key)
  }
  removeLocalStorageValue(str:string){
    localStorage.removeItem(str);
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
    let getFilterArray = [];
    let getFilterStr =  localStorage.getItem("apiFileFilter");
    
    if(getFilterStr !== "" || getFilterStr !== null){
      if(getFilterStr.includes(',')){
        getFilterArray = getFilterStr.split(',');
      }
      else{
        getFilterArray.push(getFilterStr);
      }
      console.log("getFilterArray " + getFilterArray);
      this.filters = getFilterArray;
    }
    else{
      this.filters = [];
    }
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
        if(this.service1 === 0 && this.service2 === 1) {
          
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
          await this.dpService.dPDownloadFromNode();
          await this.gdService.gDUploadFromNode();
          setTimeout(async() => {await this.gdService.gDUpdateFileName()}, 5000);
        } 
        if(this.service1 === 0 && this.service2 === 2 ) {
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
          await this.dpService.dPDownloadFromNode();
          await this.odService.odUploadFile(storePath);
        }
        if(this.service1 === 0 && this.service2 === 3) {
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
            await this.dpService.dPDownloadFromNode();
            await this.bxService.boxUpload(storePath);
        }
        if(this.service1 === 0 && this.service2 === 4) {
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
          await this.dpService.dPDownloadFromNode();
          await this.lfService.sendLfFilePath();
          await this.lfService.lfDownlodToLocalPath();
        }
        // if right is dropbox and left is google drive
         if(this.service1 === 1 && this.service2 === 0 ) {
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
          await this.dpService.dPUploadFromNode();
        }
        if(this.service1 === 1 && this.service2 === 2) {
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
          await this.odService.odUploadFile(gdStoreName); 
        }
        if(this.service1 === 1 && this.service2 === 3) {
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
          await this.bxService.boxUpload(gdStoreName);
        }
        if( this.service1 === 1 && this.service2 === 4 ) {
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
          await this.lfService.sendLfFilePath();
          await this.lfService.lfDownlodToLocalPath();
        
        }      
        if(this.service1 === 2 && this.service2 === 0){
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
          await this.dpService.dPUploadFromNode();
        }
        if(this.service1 === 2 && this.service2 === 1){
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
          await this.gdService.gDUploadFromNode();
          setTimeout(async() => {await this.gdService.gDUpdateFileName()}, 5000);
        }
        if(this.service1 === 2 && this.service2 === 3){
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
          await this.bxService.boxUpload(holdOdFile);
        }
        if(this.service1 === 2 && this.service2 === 4){
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
          await this.lfService.sendLfFilePath();
          await this.lfService.lfDownlodToLocalPath();
        }
        if(this.service1 === 3 && this.service2 === 0){
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
          await this.dpService.dPUploadFromNode();
          
        }
        if(this.service1 === 3 && this.service2 === 1){
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
          await this.gdService.gDUploadFromNode();
          setTimeout(async() => {await this.gdService.gDUpdateFileName()}, 5000);
          
        }
        if(this.service1 === 3 && this.service2 === 2){
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
          await this.odService.odUploadFile(holdBoxFile); 
          
        }
        if(this.service1 === 3 && this.service2 === 4){
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
          await this.lfService.sendLfFilePath();
          await this.lfService.lfDownlodToLocalPath();
        }
        if(this.service1 === 4 && this.service2 === 0) {
          await this.lfService.sendLfFilePath();
          await this.lfService.lfFromLocalPathToServer(this.files2[0]);
          await this.dpService.dPUploadLocalFromNode(this.files2[0])
        }
        if(this.service1 === 4 && this.service2 === 1) {
          await this.lfService.sendLfFilePath();
          await this.lfService.lfFromLocalPathToServer(this.files2[0]);
          await this.gdService.gDUploadLocal(this.files2[0]);
          setTimeout(async() => {await this.gdService.gDUpdateLocalFileName()}, 5000);
        }
        if(this.service1 === 4 && this.service2 === 2) {
          await this.lfService.sendLfFilePath();
          await this.lfService.lfFromLocalPathToServer(this.files2[0]);
          await this.odService.odUploadLocalFile(this.files2[0]);
        }
        if(this.service1 === 4 && this.service2 === 3) {
          await this.lfService.sendLfFilePath();
          await this.lfService.lfFromLocalPathToServer(this.files2[0]);
          await this.bxService.boxLocalUpload(this.files2[0]);
        }
 
      }

      if(event.previousContainer.id === "right") {

      }

      if(event.container.id === 'right') {

        if(this.service1 === 0 && this.service2 === 1) {
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
          await this.dpService.dPDownloadFromNode();
          await this.gdService.gDUploadFromNode();
          setTimeout(async() => {await this.gdService.gDUpdateFileName()}, 5000);
        }
        if(this.service1 === 0 && this.service2 === 2) {
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
          await this.dpService.dPDownloadFromNode();
          await this.odService.odUploadFile(storePath);
        }
        if(this.service1 === 0 && this.service2 === 3) {
     
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
          await this.dpService.dPDownloadFromNode();
          await this.bxService.boxUpload(storePath);
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
          await this.dpService.dPDownloadFromNode();
          await this.lfService.sendLfFilePath();
          await this.lfService.lfDownlodToLocalPath();
        }
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
        if(this.service1 === 1 && this.service2 === 2) {
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
          await this.odService.odUploadFile(gdStoreName); 
        }
        if(this.service1 === 1 && this.service2 === 3) {
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
          await this.bxService.boxUpload(gdStoreName);
        }
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
          await this.lfService.sendLfFilePath();
          await this.lfService.lfDownlodToLocalPath();
        }
        if(this.service1 === 2 && this.service2 === 0){
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
          await this.dpService.dPUploadFromNode();
        }
        if(this.service1 === 2 && this.service2 === 1){
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
          await this.gdService.gDUploadFromNode();
          setTimeout(async() => {await this.gdService.gDUpdateFileName()}, 5000);
        }
        if(this.service1 === 2 && this.service2 === 3){
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
          await this.bxService.boxUpload(holdOdFile);
        }
        if(this.service1 === 2 && this.service2 === 4){
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
          await this.lfService.sendLfFilePath();
          await this.lfService.lfDownlodToLocalPath(); 
        }
        if(this.service1 === 3 && this.service2 === 0){
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
          await this.dpService.dPUploadFromNode();
          
        }
        if(this.service1 === 3 && this.service2 === 1){
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
          await this.gdService.gDUploadFromNode();
          setTimeout(async() => {await this.gdService.gDUpdateFileName()}, 5000);
          
        }
        if(this.service1 === 3 && this.service2 === 2){
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
          await this.odService.odUploadFile(holdBoxFile); 
          
        }
        if(this.service1 === 3 && this.service2 === 4){
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
          await this.lfService.sendLfFilePath();
          await this.lfService.lfDownlodToLocalPath();
        }
        if(this.service1 === 4 && this.service2 === 0) {
          await this.lfService.sendLfFilePath();
          await this.lfService.lfFromLocalPathToServer(this.files2[0]);
          await this.dpService.dPUploadLocalFromNode(this.files2[0])
        }
      
        if(this.service1 === 4 && this.service2 === 1) {
          await this.lfService.sendLfFilePath();
          await this.lfService.lfFromLocalPathToServer(this.files2[0]);
          await this.gdService.gDUploadLocal(this.files2[0]);
          setTimeout(async() => {await this.gdService.gDUpdateLocalFileName()}, 5000);
        }
        if(this.service1 === 4 && this.service2 === 2) {
          await this.lfService.sendLfFilePath();
          await this.lfService.lfFromLocalPathToServer(this.files2[0]);
          await this.odService.odUploadLocalFile(this.files2[0]);
        }
        if(this.service1 === 4 && this.service2 === 3) {
          await this.lfService.sendLfFilePath();
          await this.lfService.lfFromLocalPathToServer(this.files2[0]);
          await this.bxService.boxLocalUpload(this.files2[0]);
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
    console.log("getFiles called");
    return await new Promise(async(resolve,reject) => {
        console.log("getFiles called two");
        let displayItems:any = await this.gdService.listGoogleDriveFiles();           
        return resolve(displayItems);
    });
  }
  async gdProcessFiles(){
      holdClientFilesToDisplay = await this.getFiles();
      let filterName = this.filterList(this.filters, this.service1);
      console.log("googledrive filter " + filterName);
      if(filterName === null || filterName === ""){
      console.log("there is not google drive filter");

       let keys = Object.keys(holdClientFilesToDisplay);
       for(let i = 0; i < keys.length; i++){
            this.files1.push((holdClientFilesToDisplay[i].gdClName));
      };
    }else{
      console.log("there is google drive filter");
      let storedGdFiles = [];
      let keys = Object.keys(holdClientFilesToDisplay);
       for(let i = 0; i < keys.length; i++){
        storedGdFiles.push((holdClientFilesToDisplay[i].gdClName));
      };
      let newDpFilteredFiles = buildFileListByFilter(filterName, storedGdFiles )
      
    for(let i = 0; i < newDpFilteredFiles.length; i++){
         this.files1.push((newDpFilteredFiles[i]));
      };
    }
       return this.files1;
   } 
  async dpProcessFiles(){
  
  let displayResult:string = localStorage.getItem("dpAccessToken");
  this.dpService.dpGetClientInfo(displayResult)
  retreiveDpFiles = await this.dpService.dpGetFilesList(displayResult);

  let filterName = this.filterList(this.filters, this.service1);
  console.log("filterName is" + filterName);
  let holdArrayRetrieved = []

 if(filterName === null || filterName === ""){
  let keys = Object.keys(retreiveDpFiles);
  for(let i = 0; i < keys.length; i++){   
    holdArrayRetrieved.push(retreiveDpFiles[i].dpClName)
      this.files1.push((holdArrayRetrieved[i]));  
    }
   }
  else{
    let keys = Object.keys(retreiveDpFiles);
    for(let i = 0; i < keys.length; i++){   
      holdArrayRetrieved.push(retreiveDpFiles[i].dpClName)
    }
    let storedFiles = holdArrayRetrieved.filter(
      element => element.indexOf('.') !== -1
    )
      let newDpFilteredFiles = buildFileListByFilter(filterName, storedFiles )
      
    for(let i = 0; i < newDpFilteredFiles.length; i++){
        this.files1.push((newDpFilteredFiles[i])); 
    };
    let intersection: string[] = holdArrayRetrieved.filter(
      element => !newDpFilteredFiles.includes(element) && !storedFiles.includes(element)  
      );
      console.log("intersection " + intersection)
    for (let index = 0; index < intersection.length; index++) {
      this.folders.push(intersection[index]);   
     }
    } 
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
  async bxProcessFiles(){
      let storeBxInfo:any = await this.bxService.getBoxClientInfo();
      let hlBxClName:string = storeBxInfo[0];
      let hlBxClEmail:string = storeBxInfo[1];
      let formathlBxClName = hlBxClName.split(",")[0];
      localStorage.setItem("boxClientEmail", hlBxClEmail );
      let mongoDbUserId = localStorage.getItem('userMnId');
    
      this.bxService.sendBoxClientInfo(formathlBxClName.replace(/['"]+/g, '').toString(),hlBxClEmail.toString(),mongoDbUserId);
      holdBoxAllFlsFl = await this.bxService.boxAllFoldersFiles();
      this.boxDisplayFoldersFiles();

  }
  boxDisplayFoldersFiles(){
    let filterName = this.filterList(this.filters, this.service1);
    let savedFlsFolders = JSON.parse(holdBoxAllFlsFl);
    let storeFlsFolders:any = savedFlsFolders.item_collection.entries;
    
    if(filterName === null || filterName === ""){
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
        }else{
          for (let index = 0; index < storeFlsFolders.length; index++) {
            let holdBoxItems = {};
            if(storeFlsFolders[index].type === "folder"){
              this.folders.push(storeFlsFolders[index].name);
            }
            else{
              holdBoxItems["bxFileName"] = storeFlsFolders[index].name;
              holdBoxItems["bxFileId"] = storeFlsFolders[index].id;
              let holdStoredBoxNames = []; 
              holdStoredBoxNames.push(storeFlsFolders[index].name);
              boxFiles.push(holdBoxItems);

              let newBxFilteredFiles = buildFileListByFilter(filterName, holdStoredBoxNames );
              for(let i = 0; i < newBxFilteredFiles.length; i++){
                  this.files1.push(newBxFilteredFiles[i]);
                } 
              }
            }
        }  
  }
  async odProcessFiles(){
    let showAllOdFlsFiles:any = await this.odService.odDisplayFilesFlsProcess();
    let runAllOdFlsFiles:any = await this.odFilesFls(showAllOdFlsFiles);
  }
  async odFilesFls(odFlsFiles:any){
    let filterName = this.filterList(this.filters, this.service1);
    return await new Promise((resolve,reject) =>{
      let storeOdItemsInArray:string[] = [];
      if(filterName === null || filterName === ""){
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
     }else{
      let key = Object.values(odFlsFiles);

      for (let index = 0; index < key.length; index++) {
        odFile.push(odFlsFiles[index]);
        storeOdItemsInArray.push(odFlsFiles[index].odFileName); 
      }

      let odFilesStored:any = storeOdItemsInArray.filter(el => el.indexOf('.') != -1);
      let odFolderStored:any = storeOdItemsInArray.filter(el => el.indexOf('.') === -1);
      let newOdFilteredFiles = buildFileListByFilter(filterName, odFilesStored )
      let uniqueArray = newOdFilteredFiles.filter(function(item, pos) {
        return newOdFilteredFiles.indexOf(item) == pos;
      });
      for (let index = 0; index < uniqueArray.length; index++) {
        this.files1.push(uniqueArray[index]);
      }
      for (let index = 0; index < odFolderStored.length; index++) {
        this.folders.push(odFolderStored[index]);
      }
     }  
      return resolve(this.files1);
    })
  }
  async lfProcessFiles() {
    let filePath:string = localStorage.getItem("localFilePath");
    console.log("filePath is " + filePath);
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
      console.log("data " + data);
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
    })
    .catch(err => console.log(err))
  }
}

