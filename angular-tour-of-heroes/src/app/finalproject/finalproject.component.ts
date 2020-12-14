import { Component, OnInit } from '@angular/core';
import {FinalprojectService} from '../finalproject.service';
import { User } from '../users';
@Component({
  selector: 'app-finalproject',
  templateUrl: './finalproject.component.html',
  styleUrls: ['./finalproject.component.css']
})
export class FinalprojectComponent implements OnInit {

  constructor(private fp: FinalprojectService) { }
  
  users: User[]

  ngOnInit(): void {
    this.fp.getUsers().subscribe(users => this.users = users )
  }

}
