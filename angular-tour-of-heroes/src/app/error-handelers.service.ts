import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandelersService extends ErrorHandler {

  constructor() {
    super();
  }
  handleError(error:Error) {
    if (Error) {
      if(error.message !== undefined){
     console.log(`Error Received ${error.message}`);
      }
      else{
        console.log(`Error Received ${error}`);
      }
    }
  }
  costumeCatchError(error:any){

    throw new Error(`Error Received ${error}`); 
  }
   
}
