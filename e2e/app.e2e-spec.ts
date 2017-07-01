import { Angualr2DemoPage } from './app.po';

describe('angualr2-demo App', () => {
  let page: Angualr2DemoPage;

  beforeEach(() => {
    page = new Angualr2DemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
