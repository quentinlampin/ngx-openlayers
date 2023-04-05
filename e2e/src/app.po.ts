import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get('/');
  }

  async getParagraphText(): Promise<string> {
    return element(by.css('app-root h1')).getText();
  }
}
