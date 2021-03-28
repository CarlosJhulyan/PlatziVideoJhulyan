import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact component={Home} path="/" />
                    <Route exact component={Login} path="/login" />
                    <Route exact component={Register} path="/register" />
                    <Route component={NotFound} path="*" />
                    <Redirect from="*" to="*"/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;