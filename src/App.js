import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import MainPage from './views/MainPage';
import routes from './routes';
import locale from './locale';
import LogIn from './views/LogIn';
import AuthContext from './contexts/AuthContext';
import useAuthProvider from './hooks/providers/useAuthProvider';
import RedirectContext from './contexts/RedirectContext';
import useRedirectProvider from './hooks/providers/useRedirectProvider';

const currentLocale = 'pl';

const App = () => {
    const auth = useAuthProvider();
    const [redirect, setRedirect] = useRedirectProvider();

    return (
        <IntlProvider locale={currentLocale} messages={locale[currentLocale]}>
            <RedirectContext.Provider value={setRedirect}>
                <AuthContext.Provider value={auth}>
                    <Router>
                        <Switch>
                            {redirect && <Redirect to={redirect} />}
                            <Route path={routes.index} exact component={MainPage} />
                            <Route path={routes.logIn} exact component={LogIn} />
                        </Switch>
                    </Router>
                </AuthContext.Provider>
            </RedirectContext.Provider>
        </IntlProvider>
    );
};

export default App;
