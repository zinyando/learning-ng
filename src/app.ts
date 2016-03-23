import {bootstrap} from 'angular2/platform/browser';
import {LearningNgApp} from './app/learning-ng';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(LearningNgApp, [
  ROUTER_PROVIDERS
]);
