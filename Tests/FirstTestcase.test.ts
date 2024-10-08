import { Selector, t } from "testcafe";
import HomePage from "../Pages/HomePage";
import UrlPage from "../Utils/UrlPage";
import ProductPage from "../Pages/ProductPage";


fixture('Testing Home Page')
  .page(UrlPage.getPageUrl())
  .afterEach(async (t) => {
    const { error, log } = await t.getBrowserConsoleMessages();
    if (!t.ctx.passed) {
      console.log('\n' + 'Errors in cosole log' + error + '\n',);
    }
  });


ValidateHomePageFunctionality();

function ValidateHomePageFunctionality(): any {
  test('Validate products is visible', async (t) => {
   await t.maximizeWindow();
   await HomePage.clickOnMobileLink();
   await ProductPage.validateProuctVisibility();
   t.ctx.passed=true;
  });
}