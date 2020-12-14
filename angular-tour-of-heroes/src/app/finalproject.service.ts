import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {User} from './users'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinalprojectService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
   return this.http.get<User[]>('http://localhost:3000/users')
  }

  getuser(id:string): Observable<User[]>{
  return this.http.get<User[]>(`http://localhost:3000/users/${id}`)
  }

}
