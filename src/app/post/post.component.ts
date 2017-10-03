import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IComment } from '../i-comment';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/concat';

@Component( {
    selector: 'gl-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
} )
export class PostComponent implements OnInit {

    public comment: any;

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute ) { }

    ngOnInit() {
        this.comment = this.apiService.getPostWithComments( this.route.snapshot.params[ 'postId' ] );

        // this.apiService.getPost( this.route.snapshot.params[ 'postId' ] )
        // .do( data => { this.post = data; } )
        // .flatMap( coments => this.apiService.getComments( coments.id ) )
        // .subscribe(p => this.comment = p);

            // const post = this.apiService.getPost( this.route.snapshot.params[ 'postId' ] );
            // const comment = this.apiService.getComments( this.route.snapshot.params[ 'postId' ] );
            // const example = Observable.concat( post, comment );

            // example.subscribe( val => { console.log('Test' , val);
            //     console.log(val);
            //     this.comment = val;
            // });


            // Observable.zip(
            //     this.apiService.getPost( this.route.snapshot.params[ 'postId' ] ),
            //     this.apiService.getComments( this.route.snapshot.params[ 'postId' ] )
            // )
            // .subscribe(([post, comment]) => {
            //     this.post = post;
            //     this.comment = comment;
            // });
    }

}
