import React, { Component } from 'react';

class Input extends Component {
    render() {
        return <div className="input">
            <input 
                type="text"
                onChange={ this.props.onChange }
                />
        </div>;
    }
};

export default Input;