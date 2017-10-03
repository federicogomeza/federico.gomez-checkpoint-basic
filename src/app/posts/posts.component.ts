import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../i-post';
import { Observable } from 'rxjs/Rx';

@Component( {
    selector: 'gl-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
} )
export class PostsComponent implements OnInit {

    public posts$: Observable<IPost[]>;

    constructor(
        private apiService: ApiService,
        ) { }

    ngOnInit() {
        this.posts$ = this.apiService.getPosts();
    }
}
