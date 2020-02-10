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
import TagDelete from './views/Authenticated/Tag/Delete/TagDelete';
import { useModelTitleProvider } from './hooks/useModelTitle';
import TaskIndex from './views/Authenticated/Task/Index/TaskIndex';
import TaskCreate from './views/Authenticated/Task/Create/TaskCreate';
import TaskEdit from './views/Authenticated/Task/Edit/TaskEdit';
import TaskDelete from './views/Authenticated/Task/Delete/TaskDelete';
import TagTasks from './views/Authenticated/Tag/Tasks/TagTasks';
import TaskTags from './views/Authenticated/Task/Tags/TaskTags';
import AttemptIndex from './views/Authenticated/Attempt/Index/AttemptIndex';
import AttemptCreate from './views/Authenticated/Attempt/Create/AttemptCreate';
import AttemptEdit from './views/Authenticated/Attempt/Edit/AttemptEdit';
import AttemptDelete from './views/Authenticated/Attempt/Delete/AttemptDelete';
import AttemptTimer from './views/Authenticated/Attempt/Timer/AttemptTimer';
import { useTimePreferenceProvider } from './hooks/useTimePreference';
import { useDatePreferenceProvider } from './hooks/useDatePreference';
import AttemptIndependentIndex from './views/Authenticated/AttemptIndependent/Index/AttemptIndependentIndex';
import AttemptIndependentCreate from './views/Authenticated/AttemptIndependent/Create/AttemptIndependentCreate';
import Dashboard from './views/Authenticated/Dashboard/Dashboard';

const App = () => {
    const auth = useAuthProvider();
    const [redirect, setRedirect] = useRedirectProvider();
    const theme = useThemeProvider();
    const [currentLocale, setLocale] = useLocaleProvider();
    const modelTitle = useModelTitleProvider();
    const timePreference = useTimePreferenceProvider();
    const datePreference = useDatePreferenceProvider();

    return (
        <IntlProvider locale={currentLocale} messages={locale[currentLocale]}>
            <StoreContext.Provider
                value={{
                    [storeKeys.useAuth]: auth,
                    [storeKeys.useRedirect]: setRedirect,
                    [storeKeys.useTheme]: theme,
                    [storeKeys.useLocale]: [currentLocale, setLocale],
                    [storeKeys.useModelTitle]: modelTitle,
                    [storeKeys.useTimePreference]: timePreference,
                    [storeKeys.useDatePreference]: datePreference,
                }}
            >
                <ToastContainer newestOnTop position="bottom-right" transition={Slide} />
                <Router>
                    <Switch>
                        {redirect && <Redirect to={redirect} />}
                        <Route path={routes.index} exact component={MainPage} />
                        <Route path={routes.logIn} exact component={LogIn} />
                        <Route path={routes.signUp} exact component={SignUp} />
                        <Route path={routes.dashboard} exact component={Dashboard} />
                        <Route path={routes.user.settings} exact component={UserSettings} />
                        <Route path={routes.user.data} exact component={UserData} />
                        <Route path={routes.user.delete} exact component={UserDelete} />
                        <Route path={routes.user.logout} exact component={UserLogout} />
                        <Route path={routes.tag.index} exact component={TagIndex} />
                        <Route path={routes.tag.create} exact component={TagCreate} />
                        <Route path={routes.tag.edit()} exact component={TagEdit} />
                        <Route path={routes.tag.tasks()} exact component={TagTasks} />
                        <Route path={routes.tag.delete()} exact component={TagDelete} />
                        <Route path={routes.task.index} exact component={TaskIndex} />
                        <Route path={routes.task.create} exact component={TaskCreate} />
                        <Route path={routes.task.edit()} exact component={TaskEdit} />
                        <Route path={routes.task.tags()} exact component={TaskTags} />
                        <Route path={routes.task.delete()} exact component={TaskDelete} />
                        <Route path={routes.attempt.index()} exact component={AttemptIndex} />
                        <Route path={routes.attempt.create()} exact component={AttemptCreate} />
                        <Route path={routes.attempt.edit()} exact component={AttemptEdit} />
                        <Route path={routes.attempt.delete()} exact component={AttemptDelete} />
                        <Route path={routes.attempt.timer()} exact component={AttemptTimer} />
                        <Route path={routes.attemptIndependent.index} exact component={AttemptIndependentIndex} />
                        <Route path={routes.attemptIndependent.create} exact component={AttemptIndependentCreate} />
                    </Switch>
                </Router>
            </StoreContext.Provider>
        </IntlProvider>
    );
};

export default App;
