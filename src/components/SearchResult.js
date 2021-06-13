import React from 'react';
import data from '../data/reps.json';

const SearchResults = props => {
    const reps = data[0];
    return(
        <div className="searchContainer" id="repSearchContainer">
        {
            Object.keys(reps).map((repName, i) => {
                if(typeof props.search !== 'undefined' || typeof props.search !== 'undefined'){
                    if(repName.toLowerCase().includes(props.search.toLowerCase())){
                        return(
                                <div key={i} value={reps[repName]} className="searchResult" onClick={() => {props.onRepClick(reps[repName], repName)}}>
                                    {repName}
                                </div>
                        );
                    }
                }
                return false;
            })
        }
        </div>
    );
};

export default SearchResults;