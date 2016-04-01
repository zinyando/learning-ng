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
import {PostService} from './post';


describe('Post Service', () => {

  beforeEachProviders(() => [PostService]);


  it('should ...', inject([PostService], (service:PostService) => {

  }));

});
