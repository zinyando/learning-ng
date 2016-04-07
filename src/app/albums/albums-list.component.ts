import {Component, OnInit} from 'angular2/core';
import {Albums, AlbumsService} from './albums.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  templateUrl: 'app/albums/albums-list.component.html',
  styleUrls: ['app/albums/albums-list.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AlbumsListComponent implements OnInit {
  albumss: Albums[];
  constructor(
    private _service: AlbumsService) {}
  ngOnInit() {
    this._service.getAll().then(albumss => this.albumss = albumss);
  }
}
