export class LearningNgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('learning-ng-app p')).getText();
  }
}
