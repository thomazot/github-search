import React, { Component } from 'react';
import Input from '../input';
import Button from '../button';
import './style.styl';

class Search extends Component {
    constructor(props) {
        super(props);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            focus: false,
            name: ''
        };
    }

    onFocus(evt) {
        this.setState({ focus: true });
    }

    onBlur(evt) {
        this.setState({ focus: false });
    }
    onChange(evt) {
        this.setState({ name: evt.target.value });
    }
    onSubmit(evt) {
        evt.preventDefault();
        window.location.href = `/search/${  this.state.name }`;
    }

    render() {
        return <div className={ 'search' + ( this.state.focus ? ' search--focus' : '' ) }>
            <form className="search__form" action="" onSubmit={ this.onSubmit }>
                <Input 
                    type="text"
                    placeholder="Nome do Usuário"
                    onFocus={ this.onFocus }
                    onBlur={ this.onBlur }
                    onChange={ this.onChange }
                    />
                <Button type="submit" text="OK" />
            </form>
        </div>;
    }
};

export default Search;