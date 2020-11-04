import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataservicesService {
  constructor() {}

  accesToken: string;

  getMessageToNode() {
    fetch('/api/StoreData', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  getCodefromUri(): string {
    const uriLink = location.href;
    const newUri = new URL(uriLink);
    const findParam = newUri.searchParams.get('code');
    //console.log(findParam)
    return findParam;
  }
  sendMessageToNode(sendCodeData: string) {
    return new Promise((resolve, reject) => {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let raw = JSON.stringify({
        title: 'codefromAngular',
        saveCode: sendCodeData,
      });

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };

      fetch('/api/showData', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log('the acces_token is ', result[Object.keys(result)[0]]);
          this.accesToken = result[Object.keys(result)[0]];
          resolve(this.accesToken);
        })
        .catch((error) => console.log('error', error));
    });
  }
  
  dPUploadFromNode() {
    fetch('/api/DPUpload', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => {return console.log(response)})
      .catch((err) => console.log(err));
  }
  dPDownloadFromNode() {
    fetch('/api/DPDownload', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => {return console.log(response)})
      .catch((err) => console.log(err));
  }   
}

