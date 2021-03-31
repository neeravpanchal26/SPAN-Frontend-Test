// Default Imports
import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";

// Component imports
import Sidenav from '../containers/side nav/sidenav';
import Carousel from '../containers/carousel/carousel';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Sidenav}/>
                <Route exact path='/carousel/:topic' component={Carousel}/>
            </Switch>
        </Router>
    )
};

// Default export
export default Routes;