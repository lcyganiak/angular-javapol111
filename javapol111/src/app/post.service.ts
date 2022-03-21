import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {Post} from './post'
@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/'
  constructor(private http: HttpClient) { }
  getPosts():Observable<any> {
    return this.http.get(`${this.url}posts`)
  }
  getComments() {
    return this.http.get(`${this.url}comments`)
  }
}
