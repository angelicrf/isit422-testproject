import { Injectable } from '@angular/core';
import { ErrorHandelersService } from './error-handelers.service';

@Injectable({
  providedIn: 'root'
})
export class BxCloudService {

  constructor(private errorService:ErrorHandelersService) { }

  accesToken:string = '';
  boxCodeStored:string = '';

  boxRedirectCode(){
    let bxUrl = "https://account.box.com/api/oauth2/authorize?response_type=code&client_id=cizpnka9apgvmixa683wgv0lk63cbv7q&redirect_uri=http://localhost:4200/cloudmanagement";
    let link = document.createElement('a');
    link.href = bxUrl;
    link.click();
  }
 async getBoxCodefromUri(){
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
        return reject(error);
      }  
    }); 
  }
  async getboxCodeOauth(boxIssuedCode:string){
    console.log("getboxCodeOauth called");
    try {
      if(boxIssuedCode !== undefined || boxIssuedCode !== null || boxIssuedCode !== ""){

        console.log( "boxIssuedCode " + boxIssuedCode);
        return await new Promise((resolve,reject) => {
          let myHeaders = new Headers();
          myHeaders.append('Content-Type', 'application/json');

          let raw = JSON.stringify({
            title: 'codefromAngular',
            saveCode: boxIssuedCode,
          });

          let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
          };
          fetch('/api/BoxCode', requestOptions)
            .then((response) => {
              console.log("inside the ResponseOne"); 
              return response.json();
            })
            .then(result => {
              console.log("inside the ResponseTWo");
              resolve(`Code Issued ${result}`);
            })
            .catch(err => {
              this.errorService.handleError(err);
              return reject(err);
            });   
      });
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  }
  async issueBoxAccessToken(){
    return await new Promise((resolve,reject) => {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let requestOptions = {
        method: 'GET',
        headers: myHeaders
      };
      fetch('/api/BoxOauth', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          this.accesToken = result[Object.keys(result)[1]];
          console.log("AccessToken form BoxService " + this.accesToken);
          localStorage.setItem("bxAccessToken", this.accesToken);
          resolve(this.accesToken);
      })
      .catch((err) => {
        this.errorService.handleError(err);
        return reject(err);
      });
   });
  }
  async getBoxClientInfo(){
    return await  new Promise((resolve,reject) => {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let requestOptions = {
        method: 'GET',
        headers: myHeaders
      };
      fetch('/api/BoxClientEmail', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          let saveClientEmail:any = result[Object.keys(result)[1]];
          let saveClientName:any = result[Object.keys(result)[2]];
          let holdBoxClientInfo = [];
          
          holdBoxClientInfo.push(saveClientName,saveClientEmail)
          console.log("BoxClientEmail form BoxService " + saveClientEmail);
          resolve(holdBoxClientInfo);
      })
      .catch(err => {
        this.errorService.handleError(err);
        return reject(err);
      });   
    });
  }
  async boxShowFile(){
    return await  new Promise((resolve,reject) => {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let requestOptions = {
        method: 'GET',
        headers: myHeaders
      };
      fetch('/api/BoxGetFile', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          let holdFileInfo:any = result[Object.keys(result)[1]];
          console.log("boxShowFile form BoxService " + JSON.stringify(holdFileInfo));
          resolve(holdFileInfo);
      })
      .catch(err => {
        this.errorService.handleError(err);
        return reject(err);
      });   
    });
  }
  async boxAllFoldersFiles(){
    return await  new Promise((resolve,reject) => {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let requestOptions = {
        method: 'GET',
        headers: myHeaders
      };

      fetch('/api/BoxGetFolders', requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          let holdAllFlsFils:any = result[Object.keys(result)[1]];
          resolve(holdAllFlsFils);
      })
      .catch(err => {
        this.errorService.handleError(err);
        return reject(err);
      });  
    });
  }
  async boxDownload(bxId:string, bxName:string){
    try {
      if(bxId !== undefined || bxId !== null || bxId !== ""
        || bxName !== undefined || bxName !== null || bxName !== ""){

        console.log("boxDownload from service " + bxId + bxName);
        return await  new Promise((resolve,reject) => {
          let myHeaders = new Headers();
          myHeaders.append('Content-Type', 'application/json');
          let raw = JSON.stringify({
            title: 'codefromAngular',
            boxFileId: bxId,
            boxFileName: bxName
          });
          let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
          };
    
          fetch('/api/BxDownload', requestOptions)
            .then((response) => {
              return response.json();
            })
            .then((result) => {
              let msgDisplay:any = result[Object.keys(result)[0]];
              console.log("boxDownload form BoxService " + msgDisplay);
              resolve(msgDisplay);
          })
          .catch (err => {
            this.errorService.handleError(err);
            return reject(err);
          });  
        });
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  }
  async boxUpload(bxFlName:string){
    try {
      if(bxFlName !== undefined || bxFlName !== null || bxFlName !== ""){
        
        return await  new Promise((resolve,reject) => {
          let myHeaders = new Headers();
          myHeaders.append('Content-Type', 'application/json');
          let raw = JSON.stringify({
            title: 'codefromAngular',
            boxUpFileName: bxFlName
          });
          let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body:raw
          };
    
          fetch('/api/BxUpload', requestOptions)
            .then((response) => {
              return response.json();
            })
            .then((result) => {
              let msgDisplay:any = result[Object.keys(result)[0]];
              console.log("boxUpload form BoxService " + msgDisplay);
              resolve(msgDisplay);
          })
          .catch(err => {
            this.errorService.handleError(err);
            return reject(err);
          });   
        });
      }
    } catch (error) {
      this.errorService.handleError(error);
    } 
  }
  async boxLocalUpload(bxFlName:string){
    try {
      if(bxFlName !== undefined || bxFlName !== null || bxFlName !== ""){
        
        return await  new Promise((resolve,reject) => {
          let myHeaders = new Headers();
          myHeaders.append('Content-Type', 'application/json');
          let raw = JSON.stringify({
            title: 'codefromAngular',
            boxUpFileName: bxFlName
          });
          let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body:raw
          };
    
          fetch('/api/BxLocalUpload', requestOptions)
            .then((response) => {
              return response.json();
            })
            .then((result) => {
              let msgDisplay:any = result[Object.keys(result)[0]];
              console.log("boxUpload form BoxService " + msgDisplay);
              resolve(msgDisplay);
          })
          .catch(err => {
            this.errorService.handleError(err);
            return reject(err);
          });   
        });
      }
    } catch (error) {
      this.errorService.handleError(error);
    }
  }
  sendBoxClientInfo(getBxName:string,getBxEmail:string,getUserMongoId:string){
    try {
      if(getBxName !== undefined || getBxName !== null || getBxName !== ""
       || getBxEmail !== undefined || getBxEmail !== null || getBxEmail !== ""
       || getUserMongoId !== undefined || getUserMongoId !== null || getUserMongoId !== ""){

        let bxClientValue = JSON.stringify({
          bxname: getBxName,
          bxemail: getBxEmail,
          usermongoid: getUserMongoId, 
        })
        let myHeaders = new Headers();
          myHeaders.append('Content-Type', 'application/json');
        return fetch('/api/MCBoxClient',{
          method: 'POST',
          headers: myHeaders,
          body: bxClientValue
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => this.errorService.handleError(err));
      }
    } catch (error) {
      this.errorService.handleError(error);
    } 
  }
}
