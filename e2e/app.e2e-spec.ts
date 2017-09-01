import { OnfloPage } from './app.po';

describe('onflo App', () => {
  let page: OnfloPage;

  beforeEach(() => {
    page = new OnfloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
