// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

import { AppPage } from './app.po';

describe('QuickAppAngular6 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: QuickAppAngular6', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('QuickAppAngular6');
  });
});
