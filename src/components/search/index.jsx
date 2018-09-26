import React, { Component } from 'react';
import Input from '../input';

class Search extends Component {

    render() {
        return <div>
            <form action="" onSubmit={ this.props.onSubmit }>
                <Input 
                    onChange={ this.props.onChange }
                    />
                <button type="submit">OK</button>
            </form>
        </div>;
    }
};

export default Search;