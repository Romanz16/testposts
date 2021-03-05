import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getDataPosts() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts');
  }
  getDataPost(id: number) {
    return this.http.get('http://jsonplaceholder.typicode.com/posts/' + id);
  }
  getDataPostComments(id: number) {
    return this.http.get(
      'http://jsonplaceholder.typicode.com/posts/' + id + '/comments'
    );
  }
}
