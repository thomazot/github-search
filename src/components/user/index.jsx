import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.styl';

class User extends Component {
    render() {
        let user = this.props.user;

        return <article className="user">
            <figure className="user__figure">
                <Link to={ `/user/${ user.login }` }>
                    <img className="user__image" src={ user.avatar_url } alt={ user.login } />
                </Link>
            </figure>
            <h1 className="user__login"><Link to={ `/user/${ user.login }` }>{ user.login }</Link></h1>
        </article>;
    }
};

export default User;
