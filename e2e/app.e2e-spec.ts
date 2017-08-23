import { AdminkaPage } from './app.po';

describe('adminka App', () => {
  let page: AdminkaPage;

  beforeEach(() => {
    page = new AdminkaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
