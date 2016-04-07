import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {AlbumsListComponent} from './albums-list.component';
import {AlbumsDetailComponent} from './albums-detail.component';
import {AlbumsService} from './albums.service';

@Component({
  template: '<router-outlet></router-outlet>',
  providers: [AlbumsService],
  directives: [RouterOutlet]
})
@RouteConfig([
  {path:'/', name: 'AlbumsList', component: AlbumsListComponent, useAsDefault: true},
  {path:'/:id', name: 'AlbumsDetail', component: AlbumsDetailComponent}
])
export class AlbumsRoot {
  constructor() {}
}
