import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './views/MainPage';

const App = () => (
    <>
        <Router>
            <Switch>
                <Route path="/" component={MainPage} />
            </Switch>
        </Router>
    </>
);

export default App;
