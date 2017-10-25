import { DojeFrontendPage } from './app.po';

describe('doje-frontend App', () => {
  let page: DojeFrontendPage;

  beforeEach(() => {
    page = new DojeFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
