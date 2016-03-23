import { LearningNgPage } from './app.po';

describe('learning-ng App', function() {
  let page: LearningNgPage;

  beforeEach(() => {
    page = new LearningNgPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('learning-ng Works!');
  });
});
