import React from 'react';
import './Categories.css';

const Categories = props => {

    

    return (
        <div className="col-3">
            <form id="search-wrapper" className="input-group mb-3">
                <input id="searchInput" className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                <div className="input-group-append">
                    <button id="searchSubmit" className="btn btn-primary" type="submit">Search</button>
                </div>
            </form>
            <div className="card">
                <h6 className="card-header">
                    ID - Categories
                </h6>
                <ul id="category-list" className="list-group">
                {props.categories.map(result => {
                    //console.log(result);
                    let classNum = result.class;
                    return (
                        <li className="category list-group-item" onClick={() => props.click({classNum})} key={classNum}>
                            {result.class} - {result.category}
                        </li>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}

export default Categories;
