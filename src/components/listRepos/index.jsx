import React, { Component } from 'react';

class ListRepos extends Component {
    render() {
        const repos = this.props.repos;
        return <div className="repos-list">
            { repos.map( (repo, index) => <div key={ index }>
                <div className="repo-list__name">{repo.name}</div>
                <div className="repo-list__description">{repo.description}</div>
            </div> ) }
        </div>;
    }
};

export default ListRepos;
