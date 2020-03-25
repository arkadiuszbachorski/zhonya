import puppeteer from 'puppeteer';
import { appUrl, createUser, wipeUser } from './utils';
import routes from '../routes';

let page;
let browser;

beforeAll(async () => {
    browser = await puppeteer.launch({
        args: ['--lang=en-EN'],
    });
    page = await browser.newPage();
    await page.goto(appUrl(routes.logIn));
    await createUser();
});

afterAll(async () => {
    await browser.close();
    await wipeUser();
});

describe('e2e - LogIn', () => {
    it('login process', async () => {
        await page.focus('input#email');
        await page.keyboard.type('test@test.com');
        await page.focus('input#password');
        await page.keyboard.type('test1234');
        await page.$eval('button[type="submit"]', button => button.click());
        await page.waitForNavigation();
        expect(page.url()).toContain('dashboard');
    });
});
