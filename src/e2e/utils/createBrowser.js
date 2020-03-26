import puppeteer from 'puppeteer';

export default function createBrowser(options) {
    const defaultOptions = {
        args: ['--lang=en-EN'],
    };

    if (process.env.REACT_APP_TEST_HEADLESS === 'false') {
        defaultOptions.headless = false;
        defaultOptions.slowMo = 30;
    }

    return puppeteer.launch({
        ...defaultOptions,
        ...options,
    });
}
