import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { ClarityModule } from 'clarity-angular';

const routes: Routes = [
    { path: 'posts', component: PostsComponent },
    { path: 'post/:postId', component: PostComponent },
    { path: '', pathMatch: 'full', redirectTo: '/posts' }
];

@NgModule( {
    declarations: [
        AppComponent,
        PostComponent,
        PostsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        ClarityModule.forRoot(),
        HttpClientModule
    ],
    providers: [
        ApiService
    ],
    bootstrap: [AppComponent]
} )

export class AppModule { }
