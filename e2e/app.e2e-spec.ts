import { TextareaMaterialPage } from './app.po';

describe('textarea-material App', () => {
  let page: TextareaMaterialPage;

  beforeEach(() => {
    page = new TextareaMaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
