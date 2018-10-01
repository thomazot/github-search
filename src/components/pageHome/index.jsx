import React, { Component } from 'react';
import Search from '../search';
import ListUsers from '../listUsers';
import axios from 'axios';
import './style.styl';

class PageHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            name: ''
        };

        this.onSubmit   = this.onSubmit.bind(this);
        this.onChange   = this.onChange.bind(this);
    }

    onSubmit(evt) {
        evt.preventDefault();
        axios.get('https://api.github.com/search/users?q=' + this.state.name)
                .then(data => data.data.items)
                .then(users => this.setState({ users }));
    }

    onChange(evt) {
        this.setState({ name: evt.target.value });
    }

    render() {
        
        return <div className="page-home">
            <div className="page-home__container">
                <div className="page-home__header">
                    <h1 className="page-home__title">GitHub - Search</h1>
                </div>
                <Search onSubmit={ this.onSubmit } onChange={ this.onChange } />
                <ListUsers users={ this.state.users } />
            </div>
        </div>;
    }
};

export default PageHome;