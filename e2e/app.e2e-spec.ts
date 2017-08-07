import { YouDemoWebPage } from './app.po';

describe('you-demo-web App', () => {
  let page: YouDemoWebPage;

  beforeEach(() => {
    page = new YouDemoWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
