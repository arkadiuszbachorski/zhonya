import puppeteer from 'puppeteer';
import { createUser, wipeUser } from './utils';

let page;
let browser;

beforeAll(async () => {
    browser = await puppeteer.launch({
        args: ['--lang=en-EN'],
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/log-in');
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
