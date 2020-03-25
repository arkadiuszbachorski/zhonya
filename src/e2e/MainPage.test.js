import puppeteer from 'puppeteer';

let page;
let browser;

beforeAll(async () => {
    browser = await puppeteer.launch({
        args: ['--lang=en-EN'],
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
});

afterAll(async () => {
    await browser.close();
});

describe('e2e - MainPage', () => {
    it('has logo', async () => {
        const logo = await page.$('a[href="/"] svg');
        expect(logo).toBeTruthy();
    });

    it('has call-to-action', async () => {
        const callToAction = await page.$x('//a[contains(.,"Try now for free") and contains(@class, "button")]');
        expect(callToAction[0]).toBeTruthy();
    });

    it('has contact form', async () => {
        const contactForm = await page.$('form');
        expect(contactForm).toBeTruthy();
        const formElements = await contactForm.$$('input, textarea, button');
        expect(formElements.length).toBeGreaterThan(2);
    });

    it('has logIn and signUp links', async () => {
        const logIn = await page.$x('//a[contains(.,"Log In")]');
        const signUp = await page.$x('//a[contains(.,"Sign Up")]');
        expect(logIn[0]).toBeTruthy();
        expect(signUp[0]).toBeTruthy();
    });
});
