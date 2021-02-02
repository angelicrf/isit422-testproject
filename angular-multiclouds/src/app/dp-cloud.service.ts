import { TryCatchStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Dropbox } from 'dropbox';
import { ErrorHandelersService } from './error-handelers.service';

@Injectable({
  providedIn: 'root'
})
export class DpCloudService {

  constructor(private errorService:ErrorHandelersService) { }

  accesToken: string;
  dropBoxClLogin(){
    const dpUrl = "https://www.dropbox.com/oauth2/authorize?client_id=4kbv0so8hjs83lf&response_type=code&scope=account_info.read files.metadata.read files.content.write files.content.read&redirect_uri=https://stormy-headland-33273.herokuapp.com/cloudmanagement/"
    let link = document.createElement('a')
    link.href = dpUrl
    link.click()
  }
  async getCodefromUri(){
    return await new Promise((resolve,reject) => {
      const uriLink = location.href;
      const newUri = new URL(uriLink);
      const findParam = newUri.searchParams.get('code'); 
      try {
        if(findParam !== undefined || findParam !== null || findParam !== ""){
          return resolve(findParam);
        }
      } catch (error) {
        this.errorService.handleError(error);
        reject(error);
      }    
    });
  }
  sendMessageToNode(sendCodeData: string) {
    try {
      if(sendCodeData !== undefined || sendCodeData !== null || sendCodeData !== ""){
         
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
              this.accesToken = result[Object.keys(result)[0]];
              resolve(this.accesToken);
            })
            .catch((error) => {
              this.errorService.handleError(error);
              return reject(error);
             });
        });
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  }
dpGetClientInfo(dpAccessToken:string){
  try {
    if(dpAccessToken !== undefined || dpAccessToken !== null || dpAccessToken !== ""){
      
      let dbx = new Dropbox({
        accessToken: dpAccessToken
      });
      console.log(JSON.stringify(dbx));
      dbx
        .usersGetCurrentAccount()
        .then(response => {
           console.log(JSON.stringify("First then" + response.result.email))
           sessionStorage.setItem('dpEmail',response.result.email)
           let getDpName = response.result.name.display_name
           let getDpEmail = response.result.email
           //userMnId is null
           let getUserMongoId = sessionStorage.getItem('userMnId')
           console.log("getUserMongoId is " + getUserMongoId)
           //connect to dpCloud mongodb
           sendDpClientInfo(getDpName,getDpEmail,getUserMongoId)
           return (getDpEmail)
          })
        .catch((err) => this.errorService.handleError(err));
    }
  } catch (error) {
    this.errorService.handleError(error);
  }
}
  async dpGetFilesList(dpAccessToken:string){
    try {
      if(dpAccessToken !== undefined || dpAccessToken !== null || dpAccessToken !== ""){
        
        return await new Promise((resolve,reject) => {
          let holdelement = [];
          let dbx = new Dropbox({
           accessToken: dpAccessToken
         });
         console.log(JSON.stringify(dbx));
         dbx
         .filesListFolder({
          path: '',
          recursive: true
         })
           .then(response => {
             let hpldDpFiles = response.result.entries
             console.log( "hpldDpFiles " + JSON.stringify(hpldDpFiles[0].path_lower))
             for (let index = 0; index < hpldDpFiles.length; index++) {
               let holdObj = {};
                holdObj["dpClName"] = hpldDpFiles[index].name;
                holdObj["dpClPath"] = hpldDpFiles[index].path_display;
                holdelement[index] = holdObj;  
             } 
             return resolve(holdelement) 
             })
           .catch((err) => {
            this.errorService.handleError(err);
            return reject(err);
           }); 
        });
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  }
  async dPDownloadFromNode() {
    return await new Promise((resolve,reject) => {
      fetch('/api/DPDownload', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((response) => {
          console.log(response)
          return resolve(response)
        })
        .catch((err) => {
          this.errorService.handleError(err);
          return reject(err);
         });
    })
  }   
  async dPDownloadLocalFromNode() {
    return await new Promise((resolve,reject) => {
      fetch('/api/DPDownloadLocal', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((response) => {
          console.log(response)
          return resolve(response)
        })
        .catch((err) => {
          this.errorService.handleError(err);
          return reject(err);
         });
    })
  }   

  async dPUploadFromNode() {
    return await new Promise((resolve,reject) => {
      fetch('/api/DPUpload', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((response) => {
          alert("File is submitted to your Dropbox");
          console.log(response)
          return resolve(response);
        })
        .catch((err) => {
          this.errorService.handleError(err);
          return reject(err);
         });
    });
  }
  async dPUploadLocalFromNode(fileName) {
    try {
      if(fileName !== undefined || fileName !== null || fileName !== ""){
        return await new Promise((resolve,reject) => {
          fetch('/api/DPUploadLocal', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
              fileName: fileName
            })
          })
            .then((response) => {
              alert("File is submitted to your Dropbox");
              console.log(response)
              return resolve(response);
            })
            .catch((err) => {
              this.errorService.handleError(err);
              return reject(err);
             });
        });
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  }
  async dpPathFiles(dpPathGiven){
    try {
      if(dpPathGiven !== undefined || dpPathGiven !== null || dpPathGiven !== ""){
        
        console.log("dpPathFile is called" + dpPathGiven);
        return await new Promise((resolve, reject) => {
          let myHeaders = new Headers();
                  myHeaders.append('Accept', '/');
                  myHeaders.append('Origin', 'x-requested-with');
                  myHeaders.append('Content-Type', 'application/json');
      
                  let raw = JSON.stringify({
                    title: 'dpPathfromAngular',
                    dpGetFPath: dpPathGiven,
                  });
                  let requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body:raw
                  }; 
                  fetch(
                    '/api/DpPath',
                    requestOptions
                  )
                    .then((response) =>
                      {return response.text()
                    
                      })
                    .then(response => {return resolve(response)})
                    .catch((err) => {
                      this.errorService.handleError(err);
                      return reject(err);
                     });
        });
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  } 
}
function sendDpClientInfo(getDbName,getDbEmail,getUserMongoId){
  console.log("sendDpClientInfo called ")
  try {
    if(getDbName !== undefined || getDbName !== null || getDbName !== ""
    || getDbEmail !== undefined || getDbEmail !== null || getDbEmail !== ""
    || getUserMongoId !== undefined || getUserMongoId !== null || getUserMongoId !== ""){
      
      let dbClientValue = JSON.stringify({
        dbname: getDbName,
        dbemail: getDbEmail,
        usermongoid: getUserMongoId, 
      })
      let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
      return fetch('/api/MCDbClient',{
        method: 'POST',
        headers: myHeaders,
        body: dbClientValue
      })
      .then(response => {return response.json()})
      .then(data => console.log(data))
      .catch(err => this.errorService.handleError(err));

    }
  } catch (error) {
    this.errorService.handleError(error);
  }
}

