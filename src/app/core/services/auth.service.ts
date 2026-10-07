import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { User } from '../../models/User';
import {Observable} from 'rxjs';
import { API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  currentUser: User | null = null;

  login(username:string,password:string):Observable<User[]>{
    return this.http.get<User[]>(`${API_URL}/users`,{params:{username,password}});
  }

}
