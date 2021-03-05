import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts!: Array<IPosts>;

  id: number;
  userId: number;
  title: string = '';
  body: string = '';
  statusAdd: boolean = true;
  editIndex: number = 0;
  error: string = '';
  success: string = '';
  constructor(private httpService: PostsService) {}

  ngOnInit() {
    this.httpService
      .getDataPosts()
      .subscribe((data: Posts[]) => (this.posts = data));
    console.log(this.posts);
  }

  public add(): void {
    this.statusAdd = true;
    this.id = 0;
    this.success = '';
    this.error = '';
  }
  public edit(i: number): void {
    this.success = '';
    this.error = '';
    this.statusAdd = false;
    this.editIndex = i;
    this.id = this.posts[i].id;
    this.userId = this.posts[i].userId;
    this.title = this.posts[i].title;
    this.body = this.posts[i].body;
  }
  public addPost(): void {
    if (this.title !== '' && this.body !== '') {
      let id: number = this.posts[this.posts.length - 1].id + 1;
      const user = new Posts(id, 1, this.title, this.body);
      this.posts.push(user);
      this.title = '';
      this.body = '';
      this.success = 'Вітаємо post успішно додано!';
      this.error = '';
    } else {
      this.error = 'Заповніть усі поля!';
      this.success = '';
    }
  }
  public editSave(): void {
    if (this.title !== '' && this.body !== '') {
      this.posts[this.editIndex].title = this.title;
      this.posts[this.editIndex].body = this.body;
      this.title = '';
      this.body = '';
      this.success = 'Дані успішно змінено!';
      this.error = '';
    } else {
      this.error =
        'Заповніть усі поля!';
      this.success = '';
    }
  }

  public deleteUser(index: number): void {
    this.posts.splice(index, 1);
  }
}
interface IPosts {
  id: number;
  userId: number;
  title: string;
  body: string;
}
class Posts implements IPosts {
  constructor(
    public id: number,
    public userId: number,
    public title: string,
    public body: string
  ) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
  }
}
