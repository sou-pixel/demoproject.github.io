import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }
  getPosts(){
    return this.http.get(this.apiUrl);
  }
}
