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
     console.log(`Error Received ${error.message}`);
    }
  }
  costumeCatchError(error:any){
    throw new Error(`Error Received ${error}`); 
  }
   
}
