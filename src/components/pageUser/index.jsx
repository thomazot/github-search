import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ListRepos from '../listRepos';

class PageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            repos: []
        };
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
                <Link to="/">Voltar</Link>
                <figure className="page-user__figure">
                    <img className="page-user__image" src={ user.avatar_url } alt={ user.login } />
                </figure>
                <h1 className="page-user__login">{ user.login }</h1>        
                <div>Seguidores: { user.followers }</div>
                <div>Seguindo: { user.following }</div>
                <div>E-Mail: { user.email ? user.email : 'E-Mail não cadastrado' }</div>
                <div>{ user.bio }</div>

                <ListRepos repos={repos} />
            </div>
        </div>;
    }
};

export default PageUser;