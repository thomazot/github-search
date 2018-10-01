import React, { Component } from 'react';
import Repos from '../repos';

import './style.styl';

class ListRepos extends Component {
    render() {
        const repos = this.props.repos;
        return <div className="repos-list">
            <div className="repos-list__header">
                <h3 className="repos-list__title">Repositorios: </h3>
            </div>
            <div className="repos-list__list">
                { repos.map( (repo, index) => <div className="repos-list__item" key={ index }><Repos repos={ repo } /></div> ) }
            </div>
        </div>;
    }
};

export default ListRepos;