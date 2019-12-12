import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Slide, ToastContainer } from 'react-toastify';
import MainPage from './views/MainPage';
import routes from './routes';
import locale from './locale';
import AuthContext from './contexts/AuthContext';
import useAuthProvider from './hooks/providers/useAuthProvider';
import RedirectContext from './contexts/RedirectContext';
import useRedirectProvider from './hooks/providers/useRedirectProvider';
import 'normalize.css';
import './scss/index.scss';
import LogIn from './views/LogIn';
import SignUp from './views/SignUp';
import UserSettings from './views/UserSettings';

const currentLocale = 'pl';

const App = () => {
    const auth = useAuthProvider();
    const [redirect, setRedirect] = useRedirectProvider();

    return (
        <IntlProvider locale={currentLocale} messages={locale[currentLocale]}>
            <RedirectContext.Provider value={setRedirect}>
                <AuthContext.Provider value={auth}>
                    <ToastContainer newestOnTop position="bottom-right" transition={Slide} />
                    <Router>
                        <Switch>
                            {redirect && <Redirect to={redirect} />}
                            <Route path={routes.index} exact component={MainPage} />
                            <Route path={routes.logIn} exact component={LogIn} />
                            <Route path={routes.signUp} exact component={SignUp} />
                            <Route path={routes.userSettings} exact component={UserSettings} />
                        </Switch>
                    </Router>
                </AuthContext.Provider>
            </RedirectContext.Provider>
        </IntlProvider>
    );
};

export default App;
