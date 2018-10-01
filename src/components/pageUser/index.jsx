import React, { Component } from 'react';
import axios from 'axios';

import ListRepos from '../listRepos';
import Header from '../header';

import './style.styl';

class PageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            repos: []
        };
        this.goBack = this.goBack.bind(this);
    }
    goBack() {
        this.props.history.goBack();
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        const login = params.login;

        axios.get(`https://api.github.com/users/${ login }`)
            .then(data => data.data )
            .then(user => {
                this.setState({ user })
                axios.get(user.repos_url)
                    .then(data => data.data)
                    .then(repos => this.setState({ repos }));
            });
    }
    render() {
        const user = this.state.user;
        const repos = this.state.repos;

        return <div className="page-user">
            <div className="page-user__container">
                <Header />
                <div className="page-user__links">
                    <a className="link link-back" onClick={this.goBack} href="#back">Voltar</a>
                </div>
                <div className="page-user__header">
                    <figure className="page-user__figure">
                        <img className="page-user__image" src={ user.avatar_url } alt={ user.login } />
                    </figure>
                    <div className="page-user__content">
                        <h1 className="page-user__login">{ user.login }</h1>        
                        <div className="page-user__followers">Seguidores: { user.followers }</div>
                        <div className="page-user__following">Seguindo: { user.following }</div>
                        <div className="page-user__email">E-Mail: { user.email ? user.email : 'E-Mail não cadastrado' }</div>
                        <div className="page-user__bio">{ user.bio }</div>
                    </div>
                </div>

                <ListRepos repos={repos} />
            </div>
        </div>;
    }
};

export default PageUser;