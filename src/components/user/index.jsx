import React, { Component } from 'react';
import './style.styl';

class User extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log(this.props);
    }
    render() {
        let user = this.props.user;

        return <article onClick={ this.handleClick } className="user">
            <figure className="user__figure">
                <img className="user__image" src={ user.avatar_url } alt={ user.login } />
            </figure>
            <h1 className="user__login">{ user.login }</h1>
        </article>;
    }
};

export default User;
