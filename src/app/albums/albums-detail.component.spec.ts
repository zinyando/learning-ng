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
import {AlbumsDetailComponent} from './albums-detail.component';
import {Router, RouteParams} from 'angular2/router';
import {Albums, AlbumsService} from './albums.service';

class MockAlbumsService {
  get() { return Promise.resolve(new Albums(1, 'one')); }
}

class MockRouter {
  navigate() { }
}

class MockRouteParams {
  get() { return 1; }
}

describe('AlbumsDetailComponent', () => {

  beforeEachProviders(() => [
    provide(AlbumsService, {useClass: MockAlbumsService}),
    provide(Router, {useClass: MockRouter}),
    provide(RouteParams, {useClass: MockRouteParams}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(AlbumsDetailComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
