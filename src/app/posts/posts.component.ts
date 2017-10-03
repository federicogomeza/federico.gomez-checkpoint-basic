import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../i-post';

@Component( {
    selector: 'gl-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
} )
export class PostsComponent implements OnInit {

    public posts: any;

    constructor(
        private apiService: ApiService,
        ) { }

    ngOnInit() {
        this.posts = this.apiService.getPosts();
    }
}
