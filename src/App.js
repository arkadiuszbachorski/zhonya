import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Slide, ToastContainer } from 'react-toastify';
import MainPage from './views/Public/MainPage/MainPage';
import routes from './routes';
import locale from './locale';
import 'normalize.css';
import './scss/index.scss';
import LogIn from './views/Guest/LogIn';
import SignUp from './views/Guest/SignUp';
import UserData from './views/Authenticated/User/Data/UserData';
import UserSendDeleteMail from './views/Authenticated/User/SendDeleteMail/UserSendDeleteMail';
import { useAuthProvider } from './hooks/useAuth';
import { useLocaleProvider } from './hooks/useLocale';
import { StoreContext, storeKeys } from './hooks/useStore';
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
import UserDashboard from './views/Authenticated/User/Dashboard/UserDashboard';
import UserSendVerificationEmail from './views/Authenticated/User/SendVerificationEmail/SendVerificationEmail';
import UserVerify from './views/Authenticated/User/Verify/Verify';
import UserDelete from './views/Authenticated/User/Delete/Delete';
import GuestRoute from './middleware/GuestRoute';
import AuthenticatedRoute from './middleware/AuthenticatedRoute';

const App = () => {
    const auth = useAuthProvider();
    const theme = useThemeProvider();
    const { locale: currentLocale, setLocale } = useLocaleProvider();
    const modelTitle = useModelTitleProvider();
    const timePreference = useTimePreferenceProvider();
    const datePreference = useDatePreferenceProvider();

    return (
        <IntlProvider locale={currentLocale} messages={locale[currentLocale]}>
            <StoreContext.Provider
                value={{
                    [storeKeys.useAuth]: auth,
                    [storeKeys.useTheme]: theme,
                    [storeKeys.useLocale]: { locale: currentLocale, setLocale },
                    [storeKeys.useModelTitle]: modelTitle,
                    [storeKeys.useTimePreference]: timePreference,
                    [storeKeys.useDatePreference]: datePreference,
                }}
            >
                <ToastContainer newestOnTop position="bottom-right" transition={Slide} />
                <Router>
                    <Switch>
                        <Route path={routes.index} exact component={MainPage} />
                        <GuestRoute path={routes.logIn} exact component={LogIn} />
                        <GuestRoute path={routes.signUp} exact component={SignUp} />
                        <AuthenticatedRoute
                            exact
                            settings={{ checkIfEmailNotVerified: true, checkIfEmailVerified: false }}
                            path={routes.user.sendVerificationEmail}
                            component={UserSendVerificationEmail}
                        />
                        <AuthenticatedRoute
                            exact
                            settings={{ checkIfEmailNotVerified: true, checkIfEmailVerified: false }}
                            path={routes.user.verify()}
                            component={UserVerify}
                        />
                        <AuthenticatedRoute exact path={routes.user.delete()} component={UserDelete} />
                        <AuthenticatedRoute exact path={routes.user.dashboard} component={UserDashboard} />
                        <AuthenticatedRoute exact path={routes.user.settings} component={UserSettings} />
                        <AuthenticatedRoute exact path={routes.user.data} component={UserData} />
                        <AuthenticatedRoute exact path={routes.user.sendDeleteEmail} component={UserSendDeleteMail} />
                        <AuthenticatedRoute exact path={routes.tag.index} component={TagIndex} />
                        <AuthenticatedRoute exact path={routes.tag.create} component={TagCreate} />
                        <AuthenticatedRoute exact path={routes.tag.edit()} component={TagEdit} />
                        <AuthenticatedRoute exact path={routes.tag.tasks()} component={TagTasks} />
                        <AuthenticatedRoute exact path={routes.tag.delete()} component={TagDelete} />
                        <AuthenticatedRoute exact path={routes.task.index} component={TaskIndex} />
                        <AuthenticatedRoute exact path={routes.task.create} component={TaskCreate} />
                        <AuthenticatedRoute exact path={routes.task.edit()} component={TaskEdit} />
                        <AuthenticatedRoute exact path={routes.task.tags()} component={TaskTags} />
                        <AuthenticatedRoute exact path={routes.task.delete()} component={TaskDelete} />
                        <AuthenticatedRoute exact path={routes.attempt.index()} component={AttemptIndex} />
                        <AuthenticatedRoute exact path={routes.attempt.create()} component={AttemptCreate} />
                        <AuthenticatedRoute exact path={routes.attempt.edit()} component={AttemptEdit} />
                        <AuthenticatedRoute exact path={routes.attempt.delete()} component={AttemptDelete} />
                        <AuthenticatedRoute exact path={routes.attempt.timer()} component={AttemptTimer} />
                        <AuthenticatedRoute
                            path={routes.attemptIndependent.index}
                            component={AttemptIndependentIndex}
                        />
                        <AuthenticatedRoute
                            path={routes.attemptIndependent.create}
                            component={AttemptIndependentCreate}
                        />
                    </Switch>
                </Router>
            </StoreContext.Provider>
        </IntlProvider>
    );
};

export default App;
