import { EnquetetoolPage } from './app.po';

describe('enquetetool App', function() {
  let page: EnquetetoolPage;

  beforeEach(() => {
    page = new EnquetetoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
