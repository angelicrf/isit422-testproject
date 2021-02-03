import { TryCatchStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ErrorHandelersService } from './error-handelers.service';

@Injectable({
  providedIn: 'root',
})
export class OdCloudService {
  profile: any;
  getOdAccessToken: any;
  issuedOdAccessToken: any;
  storeOdFiles = [];

  constructor(private errorService: ErrorHandelersService) {}
  login() {
    let odUrl =
      'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=token&client_id=266792a9-b745-45e2-a76d-494d6720ebb8&scope=https://graph.microsoft.com/Files.ReadWrite.All https://graph.microsoft.com/User.ReadWrite&state=null&redirect_uri=https://stormy-headland-33273.herokuapp.com/cloudmanagement/';
    let link = document.createElement('a');

    link.href = odUrl;
    console.log('odUrl is ' + odUrl);
    link.click();
  }
  async odCodeFromUri() {
    return await new Promise((resolve, reject) => {
      const uriLink: string = location.href;
      console.log('uriLink is ' + uriLink);
      let findParam = uriLink.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
      console.log('findParam is ' + findParam);
      try {
        if (findParam !== undefined || findParam !== null || findParam !== '') {
          return resolve(findParam);
        }
      } catch (error) {
        this.errorService.handleError(error);
        return reject(error);
      }
    }).catch((err) => console.log(err));
  }
  async odDisplayFilesFlsProcess() {
    return await new Promise(async (resolve, reject) => {
      let profileClientInfo: any = await getProfile();
      console.log('profileClientInfo ' + profileClientInfo);

      let hlOdName: string = profileClientInfo[1];
      console.log('hlOdName ' + hlOdName);
      let formatlClName: string = hlOdName.split(',')[0];
      console.log('formatlClName ' + formatlClName);
      let hlOdEmail: string = profileClientInfo[0];
      console.log('hlOdEmail ' + hlOdEmail);
      sessionStorage.setItem('odClientEmail', profileClientInfo[0]);

      let mongoDbUserId: string = sessionStorage.getItem('userMnId');
      sendOdClientInfo(
        formatlClName.replace(/['"]+/g, '').toString(),
        hlOdEmail.toString(),
        mongoDbUserId
      );

      let odAallFiles: any = await this.odGetFiles();
      let holdOdItems: any = this.storeOdFlsFiles(odAallFiles);

      try {
        if (
          holdOdItems != undefined ||
          holdOdItems !== null ||
          holdOdItems !== ''
        ) {
          return resolve(holdOdItems);
        }
      } catch (error) {
        this.errorService.handleError(error);
        return reject(error);
      }
    }).catch((err) => console.log(err));
  }
  storeOdFlsFiles(odFilesFls: any) {
    try {
      if (odFilesFls !== undefined || odFilesFls !== null) {
        let savedOdFlsFolders = JSON.parse(odFilesFls);
        let storeOdFlsFolders: any = savedOdFlsFolders.value;

        for (let index = 0; index < storeOdFlsFolders.length; index++) {
          let holdOdItems = {};
          let getOdUrl = '@microsoft.graph.downloadUrl';
          holdOdItems['odFileName'] = storeOdFlsFolders[index].name;
          holdOdItems['odFileUrl'] =
            storeOdFlsFolders[index]['@microsoft.graph.downloadUrl'];

          this.storeOdFiles.push(holdOdItems);
        }
        return this.storeOdFiles;
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  }
  async odGetFiles() {
    return await new Promise((resolve, reject) => {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
          msgPost: 'msgPosted',
        }),
      };
      fetch('/api/OdGetFiles', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          let holdOdAllFlsFils: any = result[Object.keys(result)[1]];
          resolve(holdOdAllFlsFils);
        })
        .catch((err) => {
          this.errorService.handleError(err);
          reject(err);
        });
    }).catch((err) => console.log(err));
  }
  async odDownloadFile(odUrl: string, odFl: string) {
    try {
      if (
        odUrl !== undefined ||
        odUrl !== null ||
        odUrl !== '' ||
        odFl !== undefined ||
        odFl !== null ||
        odFl !== ''
      ) {
        return await new Promise((resolve, reject) => {
          fetch('/api/OdDownload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
              odFileUrl: odUrl,
              odFileName: odFl,
            }),
          })
            .then((result) => {
              return result.json();
            })
            .then((response) => {
              let msgDisplay: any = response[Object.keys(response)[1]];

              resolve(msgDisplay);
            })
            .catch((err) => {
              this.errorService.handleError(err);
              reject(err);
            });
        }).catch((err) => console.log(err));
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  }
  async odUploadFile(odFl: string) {
    try {
      if (odFl !== undefined || odFl !== null || odFl !== '') {
        return await new Promise((resolve, reject) => {
          fetch('/api/OdUpload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
              odUpFileName: odFl,
            }),
          })
            .then((result) => {
              return result.json();
            })
            .then((response) => {
              let msgDisplay: any = response[Object.keys(response)[1]];
              resolve(msgDisplay);
            })
            .catch((err) => {
              this.errorService.handleError(err);
              reject(err);
            });
        }).catch((err) => console.log(err));
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  }
  async odUploadLocalFile(odFl: string) {
    try {
      if (odFl !== undefined || odFl !== null || odFl !== '') {
        return await new Promise((resolve, reject) => {
          fetch('/api/OdLocalUpload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
              odUpFileName: odFl,
            }),
          })
            .then((result) => {
              return result.json();
            })
            .then((response) => {
              let msgDisplay: any = response[Object.keys(response)[1]];
              resolve(msgDisplay);
            })
            .catch((err) => {
              this.errorService.handleError(err);
              reject(err);
            });
        }).catch((err) => console.log(err));
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  }
  async odAccessToken(odToken: string) {
    try {
      if (odToken !== undefined || odToken !== null || odToken !== '') {
        return await new Promise((resolve, reject) => {
          fetch('/api/OdAccessToken', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
              odCode: odToken,
            }),
          })
            .then((result) => {
              return result.json();
            })
            .then((response) => {
              let msgDisplay: any = response[Object.keys(response)[1]];
              resolve(msgDisplay);
            })
            .catch((err) => {
              this.errorService.handleError(err);
              reject(err);
            });
        }).catch((err) => console.log(err));
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  }
}

async function getProfile() {
  return await new Promise((resolve, reject) => {
    fetch('/api/OdProfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        msgPost: 'msgPosted',
      }),
    })
      .then((result) => {
        return result.json();
      })
      .then((response) => {
        let msgDisplay: any = response[Object.keys(response)[1]];
        let msgBxNameDisplay: any = response[Object.keys(response)[2]];
        let holdBxClInfo = [];
        holdBxClInfo.push(msgDisplay, msgBxNameDisplay);
        console.log('holdBxClInfo ' + holdBxClInfo);
        resolve(holdBxClInfo);
      })
      .catch((err) => {
        this.errorService.handleError(err);
        reject(err);
      });
  }).catch((err) => console.log(err));
}
function sendOdClientInfo(
  getOdName: string,
  getOdEmail: string,
  getUserMongoId: string
) {
  try {
    if (
      getOdName !== undefined ||
      getOdName !== null ||
      getOdName !== '' ||
      getOdEmail !== undefined ||
      getOdEmail !== null ||
      getOdEmail !== '' ||
      getUserMongoId !== undefined ||
      getUserMongoId !== null ||
      getUserMongoId !== ''
    ) {
      let odClientValue = JSON.stringify({
        odname: getOdName,
        odemail: getOdEmail,
        usermongoid: getUserMongoId,
      });
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      return fetch('/api/MCOdClient', {
        method: 'POST',
        headers: myHeaders,
        body: odClientValue,
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => this.errorService.handleError(err));
    }
  } catch (error) {
    this.errorService.handleError(error);
  }
}
