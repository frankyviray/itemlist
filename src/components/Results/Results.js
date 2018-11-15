import React from 'react';
import './Results.css';

const Results = props => {

    const resultImage = {
        display: "block",
        maxWidth:"75px",
        maxHeight:"75px",
        width: "auto",
        height: "auto"
    }

    
    return (
        <div className="col-9">
            <div id="result-card"className="card">
                <table className="table">
                    <thead className="card-header">
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Item #</th>
                            <th scope="col">Description</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="category-result">
                    {props.items.map((result) => {
                        //console.log(result.image)
                        let itemNum = result.item_no;
                        return (
                            <tr className="product" key={result.item_no}>
                                <td className="mx-auto">
                                    <img id="result-img" className="mx-auto" src={result.image} alt="" style={resultImage}></img>
                                </td>
                                <td>{result.item_no}</td>
                                <td>{result.item}</td>
                                <td><button className="info-btn btn btn-outline-primary" onClick={() => props.modal({itemNum})}>More Info</button></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Results;
