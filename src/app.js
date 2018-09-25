// Import Defaults
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import Routing components
import { BrowserRouter, Route } from 'react-router-dom';

// Import Components
import Home from './components/home';

ReactDOM.render (
    <BrowserRouter>
        <Route path="/" component={Home} />
    </BrowserRouter>,
    document.getElementById('app')
);