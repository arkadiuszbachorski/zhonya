import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import MainPage from './views/MainPage';
import routes from './routes';
import locale from './locale';
import LogIn from './views/LogIn';

const currentLocale = 'pl';

const App = () => (
    <IntlProvider locale={currentLocale} messages={locale[currentLocale]}>
        <Router>
            <Switch>
                <Route path={routes.index} exact component={MainPage} />
                <Route path={routes.logIn} exact component={LogIn} />
            </Switch>
        </Router>
    </IntlProvider>
);

export default App;
