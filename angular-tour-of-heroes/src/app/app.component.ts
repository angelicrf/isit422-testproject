import { Component, OnInit } from '@angular/core';
import { UserLoginService } from './user-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  appSiName = "Sign In"
  appSpName = "Sign Up"


  constructor(private usrLogin: UserLoginService){}
  ngOnInit(): void {
    
  }

}
