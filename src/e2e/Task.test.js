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
    const response = await createUser();
    await loginUser(page, response.data);
});

afterAll(async () => {
    await browser.close();
    await wipeUser();
});

const name = 'Lorem ipsum';

describe('e2e - Task', () => {
    it('fails task creation when no data provided', async () => {
        await page.createTask('', '');
        await page.waitForLoadingToEnd();
        const error = await page.queryValidationError();
        expect(error).toBeTruthy();
    });

    it('creates task', async () => {
        const description = 'Not very long description';
        await page.createTask(name, description);
        await page.waitForNavigation();
        await page.route(routes.task.index);
        expect(await page.queryTableCellWithContent(name)).toBeTruthy();
        expect(await page.queryTableCellWithContent(description)).toBeTruthy();
    });

    it('filters properly', async () => {
        await page.route(routes.task.index);
        await page.typeInput('#search', `${name} dolor amet`);
        await page.waitFor(500);
        await page.waitForLoadingToEnd();
        expect(await page.queryTableCellWithContent(name)).not.toBeTruthy();
        await page.click('[class*="ButtonFiltersReset"]');
        await page.waitFor(500);
        await page.waitForLoadingToEnd();
        expect(await page.queryTableCellWithContent(name)).toBeTruthy();
        await page.click('label[for="active"]');
        await page.waitFor(500);
        await page.waitForLoadingToEnd();
        expect(await page.queryTableCellWithContent(name)).not.toBeTruthy();
    });

    it('updates task name', async () => {
        const newName = 'New name';
        await page.route(routes.task.index);
        await page.clickTableLink();
        const [element] = await page.$x(
            '//a[contains(@href, "task") and contains(@href, "edit") and contains(.,"Edit")]',
        );
        await element.click();
        await page.waitForLoadingToEnd();
        await page.waitForXPath(`//h2[contains(.,"${name}")]`);
        await page.click('#name', {
            clickCount: 3,
        });
        await page.typeInput('#name', newName);
        await page.clickSubmit();
        await page.waitForLoadingToEnd();
        const [nameTitle] = await page.$x(`//h2[contains(., "${newName}")]`);
        expect(nameTitle).toBeTruthy();
    });

    it('deletes task', async () => {
        await page.route(routes.task.index);
        await page.clickTableLink();
        const [element] = await page.$x(
            '//a[contains(@href, "task") and contains(@href, "delete") and contains(.,"Delete")]',
        );
        await element.click();
        await page.click('label[for="confirmed"]');
        await page.clickSubmit();
        await page.waitForNavigation();
        await page.waitForLoadingToEnd();
        const [message] = await page.$x('//p[contains(.,"Not found")]');
        expect(message).toBeTruthy();
    });
});
