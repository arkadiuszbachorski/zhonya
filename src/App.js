import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Slide, ToastContainer } from 'react-toastify';
import MainPage from './views/MainPage';
import routes from './routes';
import locale from './locale';
import 'normalize.css';
import './scss/index.scss';
import LogIn from './views/Guest/LogIn';
import SignUp from './views/Guest/SignUp';
import UserData from './views/Authenticated/User/Data/UserData';
import UserDelete from './views/Authenticated/User/Delete/UserDelete';
import UserLogout from './views/Authenticated/User/Logout/UserLogout';
import { useAuthProvider } from './hooks/useAuth';
import { useRedirectProvider } from './hooks/useRedirect';
import { useLocaleProvider } from './hooks/useLocale';
import { storeKeys, StoreContext } from './hooks/useStore';
import { useThemeProvider } from './hooks/useTheme';
import UserSettings from './views/Authenticated/User/Settings/UserSettings';
import TagCreate from './views/Authenticated/Tag/Create/TagCreate';
import TagIndex from './views/Authenticated/Tag/Index/TagIndex';
import TagEdit from './views/Authenticated/Tag/Edit/TagEdit';

const App = () => {
    const auth = useAuthProvider();
    const [redirect, setRedirect] = useRedirectProvider();
    const theme = useThemeProvider();
    const [currentLocale, setLocale] = useLocaleProvider();

    return (
        <IntlProvider locale={currentLocale} messages={locale[currentLocale]}>
            <StoreContext.Provider
                value={{
                    [storeKeys.useAuth]: auth,
                    [storeKeys.useRedirect]: setRedirect,
                    [storeKeys.useTheme]: theme,
                    [storeKeys.useLocale]: [currentLocale, setLocale],
                }}
            >
                <ToastContainer newestOnTop position="bottom-right" transition={Slide} />
                <Router>
                    <Switch>
                        {redirect && <Redirect to={redirect} />}
                        <Route path={routes.index} exact component={MainPage} />
                        <Route path={routes.logIn} exact component={LogIn} />
                        <Route path={routes.signUp} exact component={SignUp} />
                        <Route path={routes.user.settings} exact component={UserSettings} />
                        <Route path={routes.user.data} exact component={UserData} />
                        <Route path={routes.user.delete} exact component={UserDelete} />
                        <Route path={routes.user.logout} exact component={UserLogout} />
                        <Route path={routes.tag.create} exact component={TagCreate} />
                        <Route path={routes.tag.index} exact component={TagIndex} />
                        <Route path={routes.tag.edit()} exact component={TagEdit} />
                    </Switch>
                </Router>
            </StoreContext.Provider>
        </IntlProvider>
    );
};

export default App;
