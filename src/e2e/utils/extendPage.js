import routes from '../../routes';

export default function extendPage(page) {
    page.clickSubmit = async () => {
        await page.click('button[type="submit"]');
    };
    page.typeInput = async (selector, value) => {
        await page.focus(selector);
        await page.keyboard.type(value);
    };
    page.queryValidationError = async () => {
        return page.$('div[class*="Errors_error"]');
    };
    page.waitForTable = async () => {
        await page.waitForSelector('*[class*="GridTable"]');
    };
    page.queryTableCellWithContent = async content => {
        const [element] = await page.$x(`//div[contains(@class, "GridTable_cell") and contains(.,"${content}")]`);
        return element;
    };
    page.waitForLoadingToEnd = async () => {
        await page.waitFor(() => {
            return !document.querySelector('[class*="Loading"]:not([class*="LoadingComplete"])');
        });
    };
    page.waitForContent = async (selector, content) => {
        return page.waitFor(() => {
            console.log(selector);
            const textContent = document.querySelector(selector)?.textContent ?? '';
            return textContent.includes(content);
        });
    };
    page.route = async (route, waitForLoading = true) => {
        await page.goto(process.env.REACT_APP_URL + route);
        if (waitForLoading) {
            await page.waitForLoadingToEnd();
        }
    };

    page.createTask = async (name, description) => {
        await page.route(routes.task.create);
        await page.typeInput('#name', name);
        await page.typeInput('#description', description);
        await page.clickSubmit();
        await page.waitForLoadingToEnd();
    };

    page.clickTableLink = async () => {
        return page.click('a[href*="/task/"][class*="GridTable_row"]');
    };
}
