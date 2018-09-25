import React, { Component } from 'react';
import Input from '../input';
import Users from '../users';

class Search extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            word: ''
        }
    }

    handleChange(evt) {
        this.setState({ word: evt.target.value });
    }

    render() {
        return <div>
            <form action="">
                <Input 
                    onChange={this.handleChange}
                    />
            </form>
            <Users name={ this.state.word } />
        </div>;
    }
};

export default Search;