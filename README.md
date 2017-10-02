# Federico.GomezCheckpointBasic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Exercise Angular + RxJS [Basic]:
Install Angular CLI
Bootstrap a new Angular app
Create a Service called ApiService with the JSON Placeholder API with these methods:
    getPosts() ->  returns a list of all posts.
    getComment(postId) ->  returns a list of comments for the postId.
    getPostWithComments(postId) ->  returns a single post with comments.

Create 2 Components
    PostsComponent ->  (displays a list of all posts)
    PostComponent ->  (displays a single post with comments and a back button).

Create 3 routes
    “/posts”    -> PostsComponent
    “/post/{id}”  -> PostComponent
    “/”  ->   Redirect to “/posts”

Must use async pipe and RxJS, no manual subscriptions or Promises
Must use types and Interfaces (Post, Comment)
Must apply private and public methods / properties
No need to style, just use <pre> and the json pipe

Resources
[Angular CLI](https://github.com/angular/angular-cli)
[JSONPlaceholder](https://github.com/typicode/jsonplaceholder)
[RxJS](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html)

REST Endpoints
    https://jsonplaceholder.typicode.com/posts 
    https://jsonplaceholder.typicode.com/posts/1 
    http://jsonplaceholder.typicode.com/comments?postId=1 

CLI example command
ng new {username}-checkpoint-basic --style=scss --routing=true --prefix=gl
