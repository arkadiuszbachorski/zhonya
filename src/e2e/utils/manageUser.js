import axios from 'axios';
import routes from '../../routes';

const params = (type, preparation = undefined) => {
    const url = `${process.env.REACT_APP_API_URL}/e2e/${type}`;
    const data = {
        token: process.env.REACT_APP_E2E_TOKEN,
    };
    if (preparation) {
        data.preparation = preparation;
    }

    return [url, data];
};

export const createUser = (preparation = undefined) => {
    return axios.post(...params('create', preparation));
};

export const wipeUser = () => {
    return axios.post(...params('wipe'));
};

export const loginUser = async (page, data) => {
    await page.route(routes.logIn);
    await page.typeInput('#email', data.email);
    await page.typeInput('#password', data.password);
    await page.click('label[for="rememberMe"]');
    await page.clickSubmit();
    await page.waitForNavigation();
};
