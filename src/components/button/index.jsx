import React, { Component } from 'react';
import './style.styl';

class Button extends Component {
    render() {
        return <div className="button">
            <button 
                className={ `button__${ this.props.type }` }
                type={ this.props.type }                
            >
                {this.props.text}
            </button>
        </div>;
    }
};

export default Button;