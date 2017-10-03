import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IComment } from './I-comment';
import { IPost } from './I-post';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/startWith';

@Injectable()
export class ApiService {

    private basePathURL = 'https://jsonplaceholder.typicode.com';

    constructor( private httpClient: HttpClient ) { }

    public getPosts(): Observable<IPost[]> {
        const path = `${this.basePathURL}/posts`;
        return this.httpClient.get<IPost[]>( path );
    }

    public getPost( postId: number ): Observable<IPost> {
        const path = `${this.basePathURL}/posts/${postId}`;
        return this.httpClient.get<IPost>( path );
    }

    public getComments( postId: number ): Observable<IComment[]> {
        const path = `${this.basePathURL}/comments?postId=${postId}`;
        return this.httpClient.get<IComment[]>( path ).startWith([]);
    }

    public getPostWithComments( postId: number ): Observable<IPost> {
        const postService$ = this.getPost( postId );
        const commentsService$ = this.getComments( postId );

        return postService$.withLatestFrom( commentsService$ )
            .map( ( [ post, comments ] ) => {
                post.comments = comments;
                return post;
            } );
    }
}
