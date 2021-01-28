import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandelersService extends ErrorHandler {

  constructor() {
    super();
  }
  handleError(error:any) {
      if(error.message !== undefined){
     console.log(`Error Received ${error.message}`);
      try {
       throw new ReferenceError();
      }
      catch (e) {
          switch (e.constructor) {
              case Error:      return console.log('generic error');
              case RangeError: return console.log('range error');
              case TypeError: return console.log('type error');
              case SyntaxError: return console.log('syntax error');
              case URIError: return console.log('uri error');
              case EvalError: return console.log('eval error');
              default:   return console.log('unknown error');
           }
          }
        }
      else{      
        console.log("There is an error")
      }
  }
  costumeCatchError(error:any){

    throw new Error(`Error Received ${error}`); 
  }
   
}
