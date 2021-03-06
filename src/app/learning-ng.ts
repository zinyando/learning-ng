import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouterOutlet} from 'angular2/router';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors/authors.component'
import {MenuSwitch} from './menu-switch/menu-switch'
import {ContactForm} from './contact-form/contact-form'
import {LoginForm} from './login-form/login-form'
import {Posts} from './posts/posts'
import {AlbumsRoot} from './albums/albums-root.component'


@Component({
  selector: 'learning-ng-app',
  providers: [],
  templateUrl:'app/learning-ng.html',
  directives: [CoursesComponent, AuthorsComponent, MenuSwitch, ContactForm, LoginForm, Posts, RouterOutlet,
 ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
    {path: '/albums/...', as: 'Albums', component: AlbumsRoot}
])
export class LearningNgApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
