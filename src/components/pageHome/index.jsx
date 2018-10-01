import React, { Component } from 'react';

import Search from '../search';
import Header from '../header';

import './style.styl';

class PageHome extends Component {
    render() {
        return <div className="page-home">
            <div className="page-home__container">
                <Header />
                <Search onChange={ this.onChange } />
            </div>
        </div>;
    }
};

export default PageHome;