import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from '../i-post';

@Component( {
    selector: 'gl-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
} )
export class PostsComponent implements OnInit {

    posts: any;


    constructor(
        private apiService: ApiService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        ) { }

    ngOnInit() {
        this.apiService.getPosts().subscribe((data) => {
            JSON.stringify(this.posts = data);
        });
    }
}
