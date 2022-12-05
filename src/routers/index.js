import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/App';
import Films from '../components/Films';
import Residents from '../components/Residents';
import PlanetDetails from '../components/PlanetDetails';
import NotFoundPage from '../components/NotFoundPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/films' component={Films} />
                <Route path='/planet-details' component={PlanetDetails} />
                <Route path='/residents' component={Residents} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
