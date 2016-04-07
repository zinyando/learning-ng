import {Component, OnInit} from 'angular2/core';
import {Albums, AlbumsService} from './albums.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

@Component({
  templateUrl: 'app/albums/albums-detail.component.html',
  styleUrls: ['app/albums/albums-detail.component.css']
})
export class AlbumsDetailComponent implements OnInit, CanDeactivate {

  albums: Albums;
  editName: string;

  constructor(
    private _service: AlbumsService,
    private _router: Router,
    private _routeParams: RouteParams
    ) { }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._service.get(id).then(albums => {
      if (albums) {
        this.editName = albums.name;
        this.albums = albums;
      } else {
        this.gotoList();
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    if (!this.albums || this.albums.name === this.editName) {
      return true;
    }

    return new Promise<boolean>((resolve, reject) => resolve(window.confirm('Discard changes?')));
  }

  cancel() {
    this.editName = this.albums.name;
    this.gotoList();
  }

  save() {
    this.albums.name = this.editName;
    this.gotoList();
  }

  gotoList() {
    this._router.navigate(['AlbumsList']);
  }
}
