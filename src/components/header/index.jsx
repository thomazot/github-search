import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.styl';

class Header extends Component {
    render() {
        
        return <div className="header">
        <h1 className="header__title"><Link to="/">GitHub - Search</Link></h1>
    </div>;
    }
};

export default Header;