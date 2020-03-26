import axios from 'axios';
import routes from '../../routes';

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

export const loginUser = async (page, credits) => {
    await page.route(routes.logIn);
    await page.typeInput('#email', credits.email);
    await page.typeInput('#password', credits.password);
    await page.click('label[for="rememberMe"]');
    await page.clickSubmit();
    await page.waitForNavigation();
};
