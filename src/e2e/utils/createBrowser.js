import puppeteer from 'puppeteer';

const defaultOptions = {
    args: ['--lang=en-EN'],
};

if (!process.env.REACT_APP_TEST_HEADLESS) {
    defaultOptions.headless = false;
    defaultOptions.slowMo = 15;
}

export default function createBrowser(options) {
    return puppeteer.launch({
        ...defaultOptions,
        ...options,
    });
}
