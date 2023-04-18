import React from "react";
import './SearchField.css';

const SearchField = React.forwardRef((props, ref) => (
    <div className="searchContainer">
        <div>
            <input
                type="text"
                className="searchTextInput"
                ref={ref} name="main_search_field"
                id="search_field"
                placeholder="Search"
            />
        </div>
    </div>
));

SearchField.propTypes = {

};

export default SearchField;
