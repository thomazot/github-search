import React, { Component } from 'react';
import './style.styl';

class Input extends Component {
    render() {
        return <div className={ `input` }>
            <input 
                onFocus={ this.props.onFocus }
                onBlur={ this.props.onBlur }
                className={ `input__${ this.props.type }` }
                type={this.props.type}
                placeholder={ this.props.placeholder }
                onChange={ this.props.onChange }
                />
        </div>;
    }
};

export default Input;