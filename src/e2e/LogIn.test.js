import { createUser, wipeUser } from './utils/manageUser';
import routes from '../routes';
import extendPage from './utils/extendPage';
import createBrowser from './utils/createBrowser';

let page;
let browser;
let user;

beforeAll(async () => {
    browser = await createBrowser();
    page = await browser.newPage();
    extendPage(page);
    await page.route(routes.logIn);
    const response = await createUser();
    user = response.data;
});

afterAll(async () => {
    await browser.close();
    await wipeUser();
});

describe('e2e - LogIn', () => {
    it('login process', async () => {
        await page.typeInput('#email', user.email);
        await page.typeInput('#password', user.password);
        await page.clickSubmit();
        await page.waitForNavigation();
        expect(page.url()).toContain('dashboard');
    });
});
