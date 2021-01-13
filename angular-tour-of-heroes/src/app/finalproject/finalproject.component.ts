import { Component, OnInit } from '@angular/core';
import { ErrorHandelersService } from '../error-handelers.service';
import {FinalprojectService} from '../finalproject.service';
import { User } from '../users';
@Component({
  selector: 'app-finalproject',
  templateUrl: './finalproject.component.html',
  styleUrls: ['./finalproject.component.css']
})
export class FinalprojectComponent implements OnInit {

  constructor(private fp: FinalprojectService,private errorService:ErrorHandelersService) { }
  
  users: User[]

  ngOnInit(): void {
    this.fp.getUsers().subscribe(users => {this.users = users}
      , error => {this.errorService.handleError(error);} )
  }

}
