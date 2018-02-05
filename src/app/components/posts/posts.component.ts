import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post){
    this.posts.unshift(post);
  }

  editPost(post: Post){    
    this.currPost = post;
    this.isEdit = true;
    console.log(this.isEdit);
  }

  onUpdatedPost(post: Post){
    this.posts.forEach((cur,index) => {
      if(post.id === cur.id){
        this.posts.splice(index,1);
        this.posts.unshift(post);
        this.isEdit = false;
      }
    });
  }

  removePost(post: Post){
    console.log("clicked");
    if(confirm('Are you sure?')){
      this.postService.deletePost(post.id).subscribe(() =>{
        this.posts.forEach((cur,index) => {
          if(post.id === cur.id){
            this.posts.splice(index,1);
                }
             });
       }
     );
    }
  }
}
