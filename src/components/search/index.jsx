import React, { Component } from 'react';
import Input from '../input';
import Button from '../button';
import './style.styl';

class Search extends Component {
    constructor(props) {
        super(props);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);

        this.state = {
            focus: false
        };
    }

    onFocus(evt) {
        this.setState({ focus: true });
    }

    onBlur(evt) {
        this.setState({ focus: false });
    }

    render() {
        return <div className={ 'search' + ( this.state.focus ? ' search--focus' : '' ) }>
            <form className="search__form" action="" onSubmit={ this.props.onSubmit }>
                <Input 
                    type="text"
                    placeholder="Nome do Usuário"
                    onFocus={ this.onFocus }
                    onBlur={ this.onBlur }
                    onChange={ this.props.onChange }
                    />
                <Button type="submit" text="OK" />
            </form>
        </div>;
    }
};

export default Search;