import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.textToAppear = true;
    },10000);
  }
  textToAppear:boolean = false;
  readLocalStorageValue(key) {
    return localStorage.getItem(key)
  }
}
