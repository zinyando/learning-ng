import {Component} from 'angular2/core';
import {PostService} from '../services/post/post';
import {HTTP_PROVIDERS} from 'angular2/http';
import{OnInit} from 'angular2/core'

@Component({
  selector: 'posts',
  templateUrl: 'app///posts/posts.html',
  styleUrls: ['app///posts/posts.css'],
  providers: [PostService, HTTP_PROVIDERS],
  directives: [],
  pipes: []
})
export class Posts implements OnInit{
    
    isLoading = true;

  constructor(private _postService: PostService) {
  }
  
  ngOnInit(){
   this._postService.getPosts()
      .then(posts => {
          this.isLoading = false;
          console.log(posts)
        });
  }

}
