import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from '../i-post';

@Component( {
    selector: 'gl-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
} )
export class PostComponent implements OnInit {
    post: IPost;
    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute ) { }

    ngOnInit() {

        this.apiService.getPost( this.route.snapshot.params[ 'postId' ] ).subscribe( data => {
            this.post = data;
        } );
    }

}
