import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {LearningNgApp} from '../app/learning-ng';

beforeEachProviders(() => [LearningNgApp]);

describe('App: LearningNg', () => {
  it('should have the `defaultMeaning` as 42', inject([LearningNgApp], (app: LearningNgApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([LearningNgApp], (app: LearningNgApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

