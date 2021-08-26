import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import LandingPage from './LandingPageComponent';


function Main(props) {
    return (
        <div>
        <Header />
        <Switch>
            <Route exact path='/home'  ><Home /></Route>
            <Route path='/landingPage' > <LandingPage/></Route>
            <Redirect to='/home' />
        </Switch>
      
    </div>
    );
}

export default Main;   