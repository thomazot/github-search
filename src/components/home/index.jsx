import React, { Component } from 'react';
import Search from '../search';
import ListUsers from '../listUsers';
import axios from 'axios';
import './style.styl';

class Home extends Component {
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
        
        return <div className="home">
            <div className="home__container">
                <Search onSubmit={ this.onSubmit } onChange={ this.onChange } />
                <ListUsers users={ this.state.users } />
            </div>
        </div>;
    }
};

export default Home;