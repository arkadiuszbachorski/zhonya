import { createUser, loginUser, wipeUser } from './utils/manageUser';
import routes from '../routes';
import extendPage from './utils/extendPage';
import createBrowser from './utils/createBrowser';

let page;
let browser;

jest.setTimeout(60000);

beforeAll(async () => {
    browser = await createBrowser();
    page = await browser.newPage();
    extendPage(page);
    const response = await createUser('prepareSearch');
    await loginUser(page, response.data);
});

afterAll(async () => {
    await browser.close();
    await wipeUser();
});

describe('e2e - Search', () => {
    it('user can search', async () => {
        await page.route(routes.user.dashboard);
        await page.waitForLoadingToEnd();
        await page.click('button[title="Search"]');
        await page.waitFor(500);
        await page.typeInput('#main-search', 'Lorem');
        await page.waitFor(500);
        await page.waitForLoadingToEnd();
        const length = await page.$$eval('[class*="SlidingMenu_active"] li', items => items.length);
        expect(length).toBe(3);
    });
});
