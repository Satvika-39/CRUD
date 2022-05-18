import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../model/api.response';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';


@Injectable()
export class UserService {
  user:any;

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://61ece709f3011500174d2245.mockapi.io/nb/getUsers/';

  

  getUser()  {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUserById(user_id: number) {
    return this.http.get(this.baseUrl + user_id);
  }

  createUser(user: User){
    return this.http.post<any>(this.baseUrl, user);
  }

  updateUser(user_id: number, user: User) {
    return this.http.put<any>(this.baseUrl + user.user_id, user);
  }

  deleteUser(user_id: number) {
    return this.http.delete<any>(this.baseUrl + user_id);
  }
}