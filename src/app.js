// Import Defaults
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import Routing components
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import Components
import PageHome from './components/pageHome';
import PageUser from './components/pageUser';
import PageSearch from './components/pageSearch';

// Style Global
import './css/index.styl';

const NoMatch = ({ location }) => (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
);

ReactDOM.render (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ PageHome } />
            <Route path="/user/:login" component={ PageUser } />
            <Route path="/search/:word" component={ PageSearch } />
            <Route component={ NoMatch } />
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
);
