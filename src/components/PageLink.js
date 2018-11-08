import React from 'react';
import { itemsPerPageLimit } from '../constants'

class PageLink extends React.Component {
    render() {
        const { header, fetchData, currentPage } = this.props;
        const totalItems = header.totalCount
        const lastPage = Math.ceil(totalItems/itemsPerPageLimit);
        const isLastPage = !header.link.includes('next');
        const isFirstPage = !header.link.includes('prev')
        const pages = [...Array(lastPage).keys()].map(key => {
            key++;
            return (
                <li key={`page${key}`} className="page-item">
                    <a className="page-link" onClick={() => fetchData(key)}>{key}</a>
                </li>
            )
        })
        return (
            <nav className="d-flex justify-content-center">
                <ul className="pagination">
                    <li className={`page-item ${isFirstPage ? 'disabled' : ''}`}>
                        <a className="page-link" onClick={() => fetchData(currentPage-1)}>Previous</a>
                    </li>
                    {pages}
                    <li className={`page-item ${isLastPage ? 'disabled' : ''}`}>
                        <a className="page-link" onClick={() => fetchData(currentPage+1)}>Next</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default PageLink;