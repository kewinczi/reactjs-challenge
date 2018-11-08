import React from 'react';

class PageLink extends React.Component {
    render() {
        const pageLimit = 12;
        const totalItems = this.props.header.totalCount
        const last = Math.ceil(totalItems/pageLimit);
        const pages = [...Array(last).keys()].map(key => {
            key++;
            const url = `http://localhost:3000/pokemon?_page=${key}&_limit=${pageLimit}`
            return <li key={`page${key}`} className="page-item"><a className="page-link" onClick={() => this.props.fetchData(url)}>{key}</a></li>
        })
        console.log(pages);
        return (
            <nav className="d-flex justify-content-center">
                <ul className="pagination">
                    {pages}
                </ul>
            </nav>
        );
    }
}

export default PageLink;