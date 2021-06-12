import React from 'react';

const SearchResults = props => {
    return(
        <div>
        {
            props.results.map(result => {
                return(<div id="result{result.id}" onClick= >{result}</div>);
            });
        }
        </div>
    );
};

export default SearchResults;