import React, { Component } from 'react';
import User from '../user';

import './style.styl';

class ListUsers extends Component {
    render() {
        return <div className="users__list">
            { this.props.users.map( (user, index) => <div key={ index } className="users__item"><User user={user} /></div>) }
            <div className="users__item users__item--empty"></div>
            <div className="users__item users__item--empty"></div>
            <div className="users__item users__item--empty"></div>
            <div className="users__item users__item--empty"></div>
            <div className="users__item users__item--empty"></div>
            <div className="users__item users__item--empty"></div>
            <div className="users__item users__item--empty"></div>
        </div>;
    }
};

export default ListUsers;
