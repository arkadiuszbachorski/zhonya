import axios from 'axios';

const params = type => {
    const url = `${process.env.REACT_APP_API_URL}/e2e/${type}`;
    const data = {
        token: process.env.REACT_APP_E2E_TOKEN,
    };

    return [url, data];
};

export const createUser = () => {
    return axios.post(...params('create'));
};

export const wipeUser = () => {
    return axios.post(...params('wipe'));
};

export const loginUser = async page => {
    await page.goto('http://localhost:3000/log-in');
    await page.focus('input#email');
    await page.keyboard.type('test@test.com');
    await page.focus('input#password');
    await page.keyboard.type('test1234');
    await page.$eval('input#rememberMe', checkbox => checkbox.click());
    await page.$eval('button[type="submit"]', button => button.click());
    await page.waitForNavigation();
    console.log(page.url());
};
