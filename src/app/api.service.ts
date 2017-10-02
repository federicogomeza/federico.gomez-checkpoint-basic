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
        return this.httpClient.get<IPost[]>(path);
    }

    public getPost( postId: number ): Observable<IPost> {
        const path = `${this.basePathURL}/posts/${postId}`;
        return this.httpClient.get<IPost>(path);
    }
}
