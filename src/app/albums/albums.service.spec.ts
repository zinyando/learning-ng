import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {provide} from 'angular2/core';
import {AlbumsService} from './albums.service';

describe('AlbumsService', () => {

  beforeEachProviders(() => [AlbumsService]);

  it('should get all albumss', inject([AlbumsService], (albumsService:AlbumsService) => {
    albumsService.getAll().then(albumss => expect(albumss.length).toBe(3));
  }));

  it('should get one albums', inject([AlbumsService], (albumsService:AlbumsService) => {
    albumsService.get(1).then(albums => expect(albums.id).toBe(1));
  }));

});
