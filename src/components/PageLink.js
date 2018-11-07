import React from 'react';

class PageLink extends React.Component {
    render() {
        console.log(this.props.link)
        const pages = [1,2,3].map(key => {
            const url = `http://localhost:3000/pokemon?_page=${key}`
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