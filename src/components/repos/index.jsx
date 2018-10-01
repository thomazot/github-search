import React, { Component } from 'react';

import './style.styl';

class ListRepos extends Component {
    render() {
        const repos = this.props.repos;
        return <div className="repos">
            <div className="repos__name">{repos.name}</div>
            <div className="repos__description">{repos.description ? repos.description : 'Sem descrição'}</div>
        </div>;
    }
};

export default ListRepos;