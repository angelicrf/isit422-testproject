import { Component, OnInit } from '@angular/core';
import { BxCloudService } from '../bx-cloud.service';
import { DpCloudService } from '../dp-cloud.service';
import { FilterService } from '../filter.service';
import { GdCloudService } from '../gd-cloud.service';
import { GDClientCredentials } from '../gdClientCredentials';
import { OdCloudService } from '../od-cloud.service';

@Component({
  selector: 'app-cloudmanagement',
  templateUrl: './cloudmanagement.component.html',
  styleUrls: ['./cloudmanagement.component.css']
})
export class CloudmanagementComponent {
  
  constructor(public filterService: FilterService,
     private gdService: GdCloudService,
     private dpService: DpCloudService,
     private gdcl:GDClientCredentials,
     private bxService: BxCloudService,
     private odService: OdCloudService) {}
  
  title = 'CloudManagementComponent';
  checked = false;
  selected:boolean = false;
  dpChecked:boolean = false;
  gdChecked:boolean = false;
  odChecked:boolean = false;
  bxChecked:boolean = false;
  lfChecked:boolean = false;

  addFilterForm = false;

  dropboxForm = false;
  googleDriveForm = false;
  oneDriveForm = false;
  boxForm = false;
  localForm = false;
  gdEmail:string = this.readLocalStorageValue('gdUserEmail')
  dpEmail:string = this.readLocalStorageValue('dpEmail')
  bxEmail:string = this.readLocalStorageValue('boxClientEmail')
  odEmail:string = this.readLocalStorageValue('odClientEmail');
  
  dbAccount = {
    "username": "",
    "password": ""
  }
  gdAccount = {
    "username": "",
    "password": ""
  }
  odAccount = {
    "username": "",
    "password": ""
  }
  bAccount = {
    "username": "",
    "password": ""
  }

  fileTypes: String[] = [
    'Audio',
    'Documents',
    'Images',
    'Videos'
  ]
  fileType: String;

  services: String[] = [
    'Dropbox',
    'Google Drive',
    'OneDrive',
    'Box',
    'Local File System'
  ]
  service: String;

  filters: String[];
  saveDpCode:any;
  localFilePath: string;

  async ngOnInit() {
    this.getFilters();
    const uriLink:string = location.href;

    if(uriLink.includes('code=MdDdy')){
      this.saveDpCode = await this.dpService.getCodefromUri();
      let stDpCode:string = this.saveDpCode;
      console.log("stDpCode " + stDpCode);
      let saveDpAccessToken:any = await this.dpService.sendMessageToNode(stDpCode);
      localStorage.setItem("dpAccessToken", saveDpAccessToken); 
      this.removeUrlParams();

      if(localStorage.getItem("gdSelected") === "gdSelected"){
        this.googleDriveInit();
        this.removeSelectedCloud("gdSelected");
      }
      if(localStorage.getItem("bxSelected") === "bxSelected"){
        this.bxService.boxRedirectCode();
        let saveBxCode:any = await this.bxService.getBoxCodefromUri();
        let stBxCode:string = saveBxCode;
        console.log("stBxCode " + stBxCode);
        await this.bxService.getboxCodeOauth(saveBxCode);
        await this.bxService.issueBoxAccessToken();
        this.removeUrlParams();

        this.removeSelectedCloud("bxSelected");
      }
      if(localStorage.getItem("odSelected") === "odSelected"){
        this.odService.login();
        let saveOdCode:any = await this.odService.odCodeFromUri();
        let saveOdAccessToken:any = await this.odService.odAccessToken(saveOdCode);
        localStorage.setItem("odAccessToken", saveOdAccessToken);
        this.removeUrlParams();

        this.removeSelectedCloud("odSelected");
      }
      if(localStorage.getItem("lfSelected") === "lfSelected"){
        alert("lf under construction :((");
        this.removeSelectedCloud("lfSelected");
      }
    }
    if(uriLink.includes('code') && !uriLink.includes('code=MdDdy')){

      let saveBxCode:any = await this.bxService.getBoxCodefromUri();
      let stBxCode:string = saveBxCode;
      console.log("stBxCode " + stBxCode);
      await this.bxService.getboxCodeOauth(saveBxCode);
      await this.bxService.issueBoxAccessToken();
      this.removeUrlParams();

      if(localStorage.getItem("gdSelected") === "gdSelected"){
        this.googleDriveInit();
        this.removeSelectedCloud("gdSelected");
      }
      if(localStorage.getItem("odSelected") === "odSelected"){
        this.odService.login();
        let saveOdCode:any = await this.odService.odCodeFromUri();
        let saveOdAccessToken:any = await this.odService.odAccessToken(saveOdCode);
        localStorage.setItem("odAccessToken", saveOdAccessToken);
        this.removeUrlParams();
        this.removeSelectedCloud("odSelected");
      }
      if(localStorage.getItem("lfSelected") === "lfSelected"){
        alert("lf under construction :((");
        this.removeSelectedCloud("lfSelected");
      }
    }
    if(uriLink.includes('access_token')){

      let saveOdCode:any = await this.odService.odCodeFromUri();
      let saveOdAccessToken:any = await this.odService.odAccessToken(saveOdCode);
      localStorage.setItem("odAccessToken", saveOdAccessToken);
      this.removeUrlParams();

      if(localStorage.getItem("gdSelected") === "gdSelected"){
        this.googleDriveInit();
        this.removeSelectedCloud("gdSelected");
      }
      if(localStorage.getItem("lfSelected") === "lfSelected"){
        alert("lf under construction :((");
        this.removeSelectedCloud("lfSelected");
      }
    } 
  }

  getFilters(): void {
    this.filters = this.filterService.getFilters();
  }

  addFilter(filter: String): void {
    if(!this.filters.includes(filter) && !filter.includes("undefined"))
      this.filters.push(filter);
  }

  linkAccount(): void {
    // This should link the account if the passed in username and password are accurate
  }

  setLocalStorageFilePath() {
    this.localForm = false; 
   /*  let target = ev.target as HTMLInputElement
    let crFile: File = (target.files as FileList)[0];
    this.localFilePath = "Desktop/dog_3.png"; */
    //target.value
    //console.log("targetvalue is " + target.value.substring(12))
   /*  var fReader = new FileReader();
    fReader.readAsDataURL(crFile);
    fReader.onloadend = function(event){
      //console.log('this currentEv ' + event.target.result)
      hdth = event.target.result;
    } */
    localStorage.setItem('localFilePath', this.localFilePath);
  }

  readLocalStorageValue(key) {
    return localStorage.getItem(key)
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
    let holdPromise = await this.gdService.googleImplementCallBack();
    console.log("HoldPromises " + holdPromise);
    let holdUserData = await this.getClientEmail();
    console.log("holdUserData " + holdUserData);
    }

  removeUrlParams(){
      return window.history.replaceState(null, null, window.location.pathname);
    }

  dropBoxClientLogin(){
    this.dpService.dropBoxClLogin();
  }

  boxClientLogin(){
    this.bxService.boxRedirectCode();
  }

  oneDriveClientLogin(){
    this.odService.login();
  }

  async handleClientLogin(){
    if(this.dpChecked && this.gdChecked){
      this.selected = true;
      localStorage.setItem("gdSelected","gdSelected");
      this.dropBoxClientLogin();   
    }
    if(this.dpChecked && this.odChecked){
      this.selected = true;
      localStorage.setItem("odSelected","odSelected");
      this.dropBoxClientLogin();  
    }
    if(this.dpChecked && this.bxChecked){
      this.selected = true;
      localStorage.setItem("bxSelected","bxSelected");
      this.dropBoxClientLogin();  
    }
    if(this.dpChecked && this.lfChecked){
      this.selected = true;
      localStorage.setItem("lfSelected","lfSelected");
      this.dropBoxClientLogin();  
    }
    if(this.odChecked && this.gdChecked){
      this.selected = true;
      localStorage.setItem("gdSelected","gdSelected");
      this.odService.login();  
    }
    if(this.odChecked && this.bxChecked){
      this.selected = true;
      localStorage.setItem("bxSelected","bxSelected");
      this.odService.login();  
    }
    if(this.odChecked && this.lfChecked){
      this.selected = true;
      localStorage.setItem("lfSelected","lfSelected");
      this.odService.login();  
    }
    if(this.bxChecked && this.gdChecked){
      this.selected = true;
      localStorage.setItem("gdSelected","gdSelected");
      this.boxClientLogin();  
    }
    if(this.bxChecked && this.lfChecked){
      this.selected = true;
      localStorage.setItem("lfSelected","lfSelected");
      this.boxClientLogin();  
    }
    if(this.lfChecked && this.gdChecked){
      this.selected = true;
      localStorage.setItem("gdSelected","gdSelected"); 
    }
    if(this.selected == false){
      alert("Dear customer, please at least check two of the checkboxes");
    }
  }
  removeSelectedCloud(slt:string){
    localStorage.removeItem(slt);
  }
}


