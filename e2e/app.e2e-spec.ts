import { Material2AdminPage } from './app.po';

describe('material2-admin App', () => {
  let page: Material2AdminPage;

  beforeEach(() => {
    page = new Material2AdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
