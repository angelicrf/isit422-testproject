import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalFilesService {

  constructor() { }
  
  async lfDownlodToLocalPath(){
    let localFilePath:string = localStorage.getItem("localFilePath");
    console.log(localFilePath);
    return await new Promise((resolve,reject) => {
      fetch('/api/LfDownload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          lfStorePlace: localFilePath
        })
      })
         .then((result) => {
          return result.json();
         }) 
         .then(response => {
          let msgDisplay:any = response[Object.keys(response)[1]];
          resolve(msgDisplay)
        })
        .catch((err) => console.log(err));
    })
   }

}

