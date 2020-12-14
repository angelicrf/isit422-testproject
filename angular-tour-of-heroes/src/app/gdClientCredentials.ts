import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class GDClientCredentials{
    constructor(){}
    holdDataClient: string[];
    holdFilesClient: string[];
}