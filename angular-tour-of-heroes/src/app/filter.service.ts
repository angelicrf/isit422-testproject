import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filters: string[] = [
    //'Images to Dropbox',
    //'Documents to Google Drive'
  ];

  add(filter: string) {
    this.filters.push(filter);
  }

  getFilters() {
    return this.filters;
  }

  clear() {
    this.filters = [];
  }
}
