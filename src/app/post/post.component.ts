import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { IPost } from '../i-post';

// Import RxJs required methods
import 'rxjs/add/operator/switchMap';

@Component( {
    selector: 'gl-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
} )
export class PostComponent implements OnInit {

    public post$: Observable<IPost> ;

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute ) { }

    ngOnInit() {
        this.post$ = this.route.paramMap
            .map( paramsMap => Number(paramsMap.get( 'postId' ) ) )
            .switchMap(postId => {
                return this.apiService.getPostWithComments( postId );
            } );
    }

}
