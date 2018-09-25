import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            users: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.name !== this.props.name){
            this.fetch(this.props.name);
        }
    }

    componentDidMount() {
        this.fetch(this.props.name);
    }

    fetch(name) {
        if(name.trim().length > 3) {
            axios.get('https://api.github.com/search/users?q=' + name)
                .then(data => data.data.items)
                .then(users => this.setState({ users }));
                
        }
    }

    render() {
        return <div>
            { this.state.users.map( (user, index) => <div key={ index }>
                {user.login}
            </div> ) }
        </div>;
    }
};

export default Users;
