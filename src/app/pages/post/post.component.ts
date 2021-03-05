import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit { 
post: IPosts;
comments:IComments[];
id: number;
  
  constructor(private httpService: PostsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = +params.get('idpost');
      
    });
    this.httpService
      .getDataPost(this.id)
      .subscribe((data: Posts) => (this.post = data));
      this.httpService
      .getDataPostComments(this.id)
      .subscribe((data: Comments[]) => (this.comments = data));
    }
  };
 

 
interface IPosts {
  id: number;
  userId: number;
  title: string;
  body: string;
}
interface IComments {
  postId: number;
  id: number;
  name: string;
  email: string;
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

class Comments implements IComments {
  constructor(
  public  postId: number,
  public id: number,
  public name: string,
  public  email: string,
  public  body: string,
  ) {
    this.postId = postId;
    this.id = id;
    this.name = name;
    this.email = email;
    this.body = body;
  }
}
