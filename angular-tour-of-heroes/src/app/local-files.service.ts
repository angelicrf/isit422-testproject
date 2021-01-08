import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalFilesService {

  constructor() { }

  async sendLfFilePath(){
    let localFilePath:string = localStorage.getItem("localFilePath");
    console.log(localFilePath);
    return await new Promise((resolve,reject) => {
      fetch('/api/LfFilePath', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          lfStorePath: localFilePath
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
   async lfDownlodToLocalPath(){
    return await new Promise((resolve,reject) => {
      let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
  
        let requestOptions = {
          method: 'GET',
          headers: myHeaders,
          
        };
        fetch('/api/LfDownload', requestOptions)
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            let holdResult:any = result[Object.keys(result)[1]];
            resolve(holdResult);
        });  
    })
  }
  async lfFromLocalPathToServer(lfTrs:string){
    return await new Promise((resolve,reject) => {
      let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
       
        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify({
            lfTranfer: lfTrs
          })
        };
        fetch('/api/LfileServer', requestOptions)
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            let holdResult:any = result[Object.keys(result)[1]];
            resolve(holdResult);
        });  
    })
  }

}

