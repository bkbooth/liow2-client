import { Liow2ClientPage } from './app.po';

describe('liow2-client App', function() {
  let page: Liow2ClientPage;

  beforeEach(() => {
    page = new Liow2ClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to liow!!');
  });
});
