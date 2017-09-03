import { browser, by, element } from 'protractor';

export class EjerciciosSemestre1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mvat-root h1')).getText();
  }
}
