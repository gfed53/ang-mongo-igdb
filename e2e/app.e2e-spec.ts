import { AngMongoYoutubePage } from './app.po';

describe('ang-mongo-youtube App', function() {
  let page: AngMongoYoutubePage;

  beforeEach(() => {
    page = new AngMongoYoutubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
