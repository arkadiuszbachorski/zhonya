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
    const { data } = await createUser('createTask');
    await loginUser(page, data);
});

afterAll(async () => {
    await browser.close();
    await wipeUser();
});

const timerValue = async () => {
    return page.$eval('[class*="Timer_value"]', timer => timer.innerText);
};

const navigateTo = async action => {
    await page.click(`a[href$="/${action}"]`);
    await page.waitForLoadingToEnd();
};

describe('e2e - Attempt', () => {
    it('creates attempt', async () => {
        await page.route(routes.attemptIndependent.create);
        await page.waitForLoadingToEnd();
        await page.selectFirstOption('#task');
        await page.clickSubmit();
        await page.waitForNavigation();
        await page.waitForLoadingToEnd();
        expect(page.url()).toContain('/task/');
        expect(page.url()).toContain('/attempt/');
    });

    it('can edit time', async () => {
        await navigateTo('edit');
        await page.click('label[for="changeTime"]');
        await page.typeInput('#seconds', '2');
        await page.clickSubmit();
        await page.waitForLoadingToEnd();
        expect(true).toBe(true);
    });

    it('measures time', async () => {
        await navigateTo('timer');
        const timer = await timerValue();
        expect(timer).toBe('02');
        await page.click('[class*="content"] button');
        await page.waitFor(2000);
        const timerAfter = await timerValue();
        expect(timerAfter).not.toBe('02');
    });

    it('can be switched off from dashboard', async () => {
        const attemptCard = '[class*="Card"]:nth-child(3)';
        await page.route(routes.user.dashboard);
        await page.click(`${attemptCard} ul button`);
        await page.click(`${attemptCard} a[title="List"]`);
        await page.click('label[for="active"]');
        await page.waitFor(500);
        await page.waitForLoadingToEnd();
        const [message] = await page.$x('//p[contains(.,"Not found")]');
        expect(message).toBeTruthy();
    });
});
