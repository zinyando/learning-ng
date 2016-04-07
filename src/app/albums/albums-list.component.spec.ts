import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {AlbumsListComponent} from './albums-list.component';
import {Albums, AlbumsService} from './albums.service';

class MockAlbumsService {
  getAll() { return Promise.resolve([new Albums(1, 'one')]); }
}

describe('AlbumsListComponent', () => {

  beforeEachProviders(() => [
    provide(AlbumsService, {useClass: MockAlbumsService}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(AlbumsListComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
