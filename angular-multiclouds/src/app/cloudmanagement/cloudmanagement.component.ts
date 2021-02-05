import { Component, OnInit } from '@angular/core';
import { BxCloudService } from '../bx-cloud.service';
import { DpCloudService } from '../dp-cloud.service';
import { ErrorHandelersService } from '../error-handelers.service';
import { FilterService } from '../filter.service';
import { GdCloudService } from '../gd-cloud.service';
import { GDClientCredentials } from '../gdClientCredentials';
import { OdCloudService } from '../od-cloud.service';

@Component({
  selector: 'app-cloudmanagement',
  templateUrl: './cloudmanagement.component.html',
  styleUrls: ['./cloudmanagement.component.css'],
})
export class CloudmanagementComponent {
  constructor(
    public filterService: FilterService,
    private gdService: GdCloudService,
    private dpService: DpCloudService,
    private gdcl: GDClientCredentials,
    private bxService: BxCloudService,
    private odService: OdCloudService,
    private errorService: ErrorHandelersService
  ) {}

  title = 'CloudManagementComponent';
  checked = false;
  selectedApi: String[] = [];
  selected: boolean = false;
  dpChecked: boolean = false;
  gdChecked: boolean = false;
  odChecked: boolean = false;
  bxChecked: boolean = false;
  lfChecked: boolean = false;

  addFilterForm = false;

  dropboxForm = false;
  googleDriveForm = false;
  oneDriveForm = false;
  boxForm = false;
  localForm = false;

  gdEmail: string = this.readsessionStorageValue('gdUserEmail');
  dpEmail: string = this.readsessionStorageValue('dpEmail');
  bxEmail: string = this.readsessionStorageValue('boxClientEmail');
  odEmail: string = this.readsessionStorageValue('odClientEmail');

  dbAccount = {
    username: '',
    password: '',
  };
  gdAccount = {
    username: '',
    password: '',
  };
  odAccount = {
    username: '',
    password: '',
  };
  bAccount = {
    username: '',
    password: '',
  };

  fileTypes: String[] = ['Audio', 'Documents', 'Images', 'Videos'];
  fileType: String;

  services: String[] = [
    'Dropbox',
    'GoogleDrive',
    'OneDrive',
    'Box',
    'LocalFiles',
  ];
  service: String;

  filters: string[] = [];
  saveDpCode: any;
  localFilePath: string;

  async ngOnInit() {
    let uriLink = location.href;
    console.log('uriLink is ' + uriLink);
    try {
      if (uriLink.includes('code=MdDdy') && !uriLink.includes('error')) {
        console.log('url contains code=MdDdy');
        this.saveDpCode = await this.dpService.getCodefromUri();
        let stDpCode: string = this.saveDpCode;
        console.log('stDpCode ' + stDpCode);
        let saveDpAccessToken: any = await this.dpService.sendMessageToNode(
          stDpCode
        );
        sessionStorage.setItem('dpAccessToken', saveDpAccessToken);
        this.removeUrlParams();

        if (sessionStorage.getItem('gdSelected') === 'gdSelected') {
          this.removeSelectedCloud('gdSelected');
          this.googleDriveInit();
        }
        if (sessionStorage.getItem('bxSelected') === 'bxSelected') {
          this.removeSelectedCloud('bxSelected');
          this.bxService.boxRedirectCode();
          let saveBxCode: any = await this.bxService.getBoxCodefromUri();
          let stBxCode: string = saveBxCode;
          console.log('stBxCode ' + stBxCode);
          await this.bxService.getboxCodeOauth(saveBxCode);
          await this.bxService.issueBoxAccessToken();
          this.removeUrlParams();
        }
        if (sessionStorage.getItem('odSelected') === 'odSelected') {
          //this.removeSelectedCloud("odSelected");
          this.odService.login();
          let saveOdCode: any = await this.odService.odCodeFromUri();
          let saveOdAccessToken: any = await this.odService.odAccessToken(
            saveOdCode
          );
          sessionStorage.setItem('odAccessToken', saveOdAccessToken);
          this.removeUrlParams();
        }
        if (sessionStorage.getItem('lfSelected') === 'lfSelected') {
          this.removeSelectedCloud('lfSelected');
          this.readsessionStorageValue('localFilePath');
        }
      }
      if (
        uriLink.includes('code') &&
        !uriLink.includes('code=MdDdy') &&
        !uriLink.includes('error')
      ) {
        console.log('url contains code');
        let saveBxCode: any = await this.bxService.getBoxCodefromUri();
        let stBxCode: string = saveBxCode;
        console.log('stBxCode ' + stBxCode);
        await this.bxService.getboxCodeOauth(saveBxCode);
        await this.bxService.issueBoxAccessToken();
        this.removeUrlParams();

        if (sessionStorage.getItem('gdSelected') === 'gdSelected') {
          this.removeSelectedCloud('gdSelected');
          this.googleDriveInit();
        }
        if (sessionStorage.getItem('odSelected') === 'odSelected') {
          this.removeSelectedCloud('odSelected');
          this.odService.login();
          let saveOdCode: any = await this.odService.odCodeFromUri();
          let saveOdAccessToken: any = await this.odService.odAccessToken(
            saveOdCode
          );
          sessionStorage.setItem('odAccessToken', saveOdAccessToken);
          this.removeUrlParams();
        }
        if (sessionStorage.getItem('lfSelected') === 'lfSelected') {
          this.removeSelectedCloud('lfSelected');
          this.readsessionStorageValue('localFilePath');
        }
      }
      if (uriLink.includes('access_token') && !uriLink.includes('error')) {
        console.log('url contains access_token');
        let saveOdCode: any = await this.odService.odCodeFromUri();
        let saveOdAccessToken: any = await this.odService.odAccessToken(
          saveOdCode
        );
        sessionStorage.setItem('odAccessToken', saveOdAccessToken);
        this.removeUrlParams();

        if (sessionStorage.getItem('gdSelected') === 'gdSelected') {
          this.removeSelectedCloud('gdSelected');
          this.googleDriveInit();
        }
        if (sessionStorage.getItem('lfSelected') === 'lfSelected') {
          this.removeSelectedCloud('lfSelected');
          this.readsessionStorageValue('localFilePath');
        }
      }
      if (uriLink.includes('error')) {
        alert(
          'Authentication error, Try again with a registered username and password  ....'
        );
        location.replace(
          'https://stormy-headland-33273.herokuapp.com/cloudmanagement'
        );
      }
    } catch (error) {
      console.log('thre is an error to get access_token');
      this.errorService.handleError(error);
    }
  }

  addFilter(filter: string): void {
    try {
      if (filter !== undefined || filter !== null || filter !== '') {
        // if(!this.filters.includes(filter) && !filter.includes("undefined")){
        this.filters.push(filter);
        sessionStorage.setItem('apiFileFilter', filter);
        // }
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  }

  linkAccount(): void {
    // This should link the account if the passed in username and password are accurate
  }

  setsessionStorageFilePath() {
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
    sessionStorage.setItem('localFilePath', this.localFilePath);
  }

  readsessionStorageValue(key) {
    try {
      if (key !== undefined || key !== null || key !== '') {
        return sessionStorage.getItem(key);
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  }

  clientEmailValue(v: string) {
    try {
      if (v !== undefined || v !== null || v !== '') {
        if (sessionStorage.getItem('gdUserEmail') == null) {
          this.gdEmail = v;
          sessionStorage.setItem('gdUserEmail', this.gdEmail);
          console.log('the value from set2 ' + this.gdEmail);
        } else if (sessionStorage.getItem('gdUserEmail') !== v) {
          sessionStorage.removeItem('gdUserEmail');
          this.gdEmail = v;
          sessionStorage.setItem('gdUserEmail', this.gdEmail);
          console.log('the value from set2 ' + this.gdEmail);
        } else this.gdEmail = sessionStorage.getItem('gdUserEmail');
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  }

  async getClientEmail() {
    return await this.clientEmailValue(this.gdcl.holdDataClient[0]);
  }

  async googleDriveInit() {
    let holdPromise = await this.gdService.googleImplementCallBack();
    console.log('HoldPromises ' + holdPromise);
    let holdUserData = await this.getClientEmail();
    console.log('holdUserData ' + holdUserData);
  }

  removeUrlParams() {
    return window.history.replaceState(null, null, window.location.pathname);
  }

  dropBoxClientLogin() {
    this.dpService.dropBoxClLogin();
  }

  boxClientLogin() {
    this.bxService.boxRedirectCode();
  }

  oneDriveClientLogin() {
    this.odService.login();
  }

  async handleClientLogin() {
    try {
      if (this.dpChecked && this.gdChecked) {
        this.selectedApi.push(this.services[0], this.services[1]);
        this.selected = true;
        sessionStorage.setItem('gdSelected', 'gdSelected');
        sessionStorage.setItem('apiSelected', JSON.stringify(this.selectedApi));
        this.dropBoxClientLogin();
      }
      if (this.dpChecked && this.odChecked) {
        this.selectedApi.push(this.services[0], this.services[2]);
        this.selected = true;
        sessionStorage.setItem('odSelected', 'odSelected');
        sessionStorage.setItem('apiSelected', JSON.stringify(this.selectedApi));
        this.dropBoxClientLogin();
      }
      if (this.dpChecked && this.bxChecked) {
        console.log('bxChecked has selected one');
        this.selectedApi.push(this.services[0], this.services[3]);
        this.selected = true;
        sessionStorage.setItem('bxSelected', 'bxSelected');
        sessionStorage.setItem('apiSelected', JSON.stringify(this.selectedApi));
        this.dropBoxClientLogin();
      }
      if (this.dpChecked && this.lfChecked) {
        this.selectedApi.push(this.services[0], this.services[4]);
        this.selected = true;
        sessionStorage.setItem('lfSelected', 'lfSelected');
        sessionStorage.setItem('apiSelected', JSON.stringify(this.selectedApi));
        this.dropBoxClientLogin();
      }
      if (this.odChecked && this.gdChecked) {
        this.selectedApi.push(this.services[2], this.services[1]);
        this.selected = true;
        sessionStorage.setItem('gdSelected', 'gdSelected');
        sessionStorage.setItem('apiSelected', JSON.stringify(this.selectedApi));
        this.odService.login();
      }
      if (this.odChecked && this.bxChecked) {
        console.log('bxChecked has selected two');
        this.selectedApi.push(this.services[2], this.services[3]);
        this.selected = true;
        sessionStorage.setItem('bxSelected', 'bxSelected');
        sessionStorage.setItem('apiSelected', JSON.stringify(this.selectedApi));
        this.odService.login();
      }
      if (this.odChecked && this.lfChecked) {
        console.log('odchecked has selected');
        this.selectedApi.push(this.services[2], this.services[4]);
        this.selected = true;
        sessionStorage.setItem('lfSelected', 'lfSelected');
        sessionStorage.setItem('apiSelected', JSON.stringify(this.selectedApi));
        this.odService.login();
      }
      if (this.bxChecked && this.gdChecked) {
        console.log('bxChecked has selected two');
        this.selectedApi.push(this.services[3], this.services[1]);
        this.selected = true;
        sessionStorage.setItem('gdSelected', 'gdSelected');
        sessionStorage.setItem('apiSelected', JSON.stringify(this.selectedApi));
        this.boxClientLogin();
      }
      if (this.bxChecked && this.lfChecked) {
        console.log('bxChecked has selected three');
        this.selectedApi.push(this.services[3], this.services[4]);
        this.selected = true;
        sessionStorage.setItem('lfSelected', 'lfSelected');
        sessionStorage.setItem('apiSelected', JSON.stringify(this.selectedApi));
        sessionStorage.setItem('odSelected', 'odSelected');
        this.boxClientLogin();
      }
      if (this.lfChecked && this.gdChecked) {
        this.selectedApi.push(this.services[4], this.services[1]);
        this.selected = true;

        sessionStorage.setItem('apiSelected', JSON.stringify(this.selectedApi));
        this.googleDriveInit();
      }
      if (this.selected == false) {
        alert('Dear customer, please at least check two of the checkboxes');
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  }
  removeSelectedCloud(slt: string) {
    try {
      if (slt !== undefined || slt !== null || slt !== '') {
        sessionStorage.removeItem(slt);
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  }
}
