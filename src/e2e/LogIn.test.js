import { createUser, wipeUser, loginUser } from './utils/manageUser';
import extendPage from './utils/extendPage';
import createBrowser from './utils/createBrowser';

let page;
let browser;
let user;

jest.setTimeout(60000);

beforeAll(async () => {
    browser = await createBrowser();
    page = await browser.newPage();
    extendPage(page);
    const response = await createUser();
    user = response.data;
});

afterAll(async () => {
    await browser.close();
    await wipeUser();
});

describe('e2e - LogIn', () => {
    it('login process', async () => {
        await loginUser(page, user);
        expect(await page.url()).toContain('dashboard');
    });
});
