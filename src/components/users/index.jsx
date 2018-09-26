import React, { Component } from 'react';

class Users extends Component {
    render() {
        return <div>
            { this.props.users.map( (user, index) => <div key={ index }>
                {user.login}
            </div> ) }
        </div>;
    }
};

export default Users;
