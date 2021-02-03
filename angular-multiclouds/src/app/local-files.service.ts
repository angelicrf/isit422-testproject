import { Injectable } from '@angular/core';
import { ErrorHandelersService } from './error-handelers.service';

@Injectable({
  providedIn: 'root',
})
export class LocalFilesService {
  constructor(private errorService: ErrorHandelersService) {}

  async sendLfFilePath() {
    let localFilePath: string = sessionStorage.getItem('localFilePath');
    console.log(localFilePath);
    return await new Promise((resolve, reject) => {
      fetch('/api/LfFilePath', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          lfStorePath: localFilePath,
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
  async lfDownlodToLocalPath() {
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
      fetch('/api/LfDownload', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          let holdResult: any = result[Object.keys(result)[1]];
          resolve(holdResult);
        })
        .catch((err) => {
          this.errorService.handleError(err);
          reject(err);
        });
    }).catch((err) => console.log(err));
  }
  async lfFromLocalPathToServer(lfTrs: string) {
    try {
      if (lfTrs !== undefined || lfTrs !== null || lfTrs !== '') {
        return await new Promise((resolve, reject) => {
          let myHeaders = new Headers();
          myHeaders.append('Content-Type', 'application/json');

          let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
              lfTranfer: lfTrs,
            }),
          };
          fetch('/api/LfileServer', requestOptions)
            .then((response) => {
              return response.json();
            })
            .then((result) => {
              let holdResult: any = result[Object.keys(result)[1]];
              resolve(holdResult);
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
