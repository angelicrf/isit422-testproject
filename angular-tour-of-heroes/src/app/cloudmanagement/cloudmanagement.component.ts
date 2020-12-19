import { Component, OnInit } from '@angular/core';
import { BxCloudService } from '../bx-cloud.service';
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
  
  constructor(public filterService: FilterService, private gdService: GdCloudService, private gdcl:GDClientCredentials, private bxService: BxCloudService, private odService: OdCloudService) {}
  
  title = 'CloudManagementComponent';
  checked = false;

  addFilterForm = false;

  dropboxForm = false;
  googleDriveForm = false;
  oneDriveForm = false;
  boxForm = false;
  localForm = false;
  gdEmail:string = this.readLocalStorageValue('gdUserEmail')
  dpEmail:string = this.readLocalStorageValue('dpEmail')
  bxEmail:string = this.readLocalStorageValue('boxClientEmail')
  
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

  localFilePath: string;

  ngOnInit(): void {
    this.getFilters();
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
    //this.googleDriveForm = true
    let holdPromise = await this.gdService.googleImplementCallBack()
    console.log("HoldPromises " + holdPromise)
    let holdUserData = await this.getClientEmail()
    console.log("holdUserData " + holdUserData)
    }
  dropBoxClientLogin(){
    //this.dropboxForm = false
    const dpUrl = "https://www.dropbox.com/oauth2/authorize?client_id=4kbv0so8hjs83lf&response_type=code&scope=account_info.read files.metadata.read files.content.write files.content.read&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Ffiletransfer"
    let link = document.createElement('a')
    link.href = dpUrl
    link.click()
  }
  boxSaveCode(){
    this.bxService.boxRedirectCode();
  }
  oneDriveLogin(){
    this.odService.login();
  }
}


