import React from "react";
import styles from './SearchField.module.css';

const SearchField = ({onChange}) => (
    <div className={styles.searchWrapper}>
        <div className={styles.searchContainer}>
            <input
                type="text"
                className={styles.searchTextInput}
                name="main_search_field"
                id="search_field"
                onChange={onChange}
                placeholder="Search"
            />
        </div>
    </div>
);

export default SearchField;
