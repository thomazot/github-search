import React, { Component } from 'react';
import axios from 'axios';

import Search from '../search';
import Header from '../header';
import ListUsers from '../listUsers';

import './style.styl';

class PageSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        const word = params.word;
        axios.get(`https://api.github.com/search/users?q=${word}`)
                .then(data => data.data.items)
                .then(users => this.setState({ users }));
    }
    render() {

        return <div className="page-search">
            <Header />
            <Search onSubmit={ this.onSubmit } onChange={ this.onChange } />
            <ListUsers users={ this.state.users } />
        </div>;
    }
};

export default PageSearch;