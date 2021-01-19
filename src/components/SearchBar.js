import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ setKeyword, keyword }) => {
    //const style;

    return (
        <div className="searchbar">
            <input
                className="search-input"
                type="text"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                placeholder="Looking for something?">
            </input>
            <FontAwesomeIcon icon={faSearch} />
        </div>
    );
}

export default SearchBar;