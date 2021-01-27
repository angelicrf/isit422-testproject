import { Component, OnInit } from '@angular/core';
import { ErrorHandelersService } from '../error-handelers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private errorService:ErrorHandelersService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.textToAppear = true;
    },10000);
  }
  textToAppear:boolean = false;
  readsessionStorageValue(key) {
    try {
      if(key !== undefined || key !== null || key !== ""){
        return sessionStorage.getItem(key);
      }
    } catch (error) {
      this.errorService.handleError(error);
    }  
  }
}
