import React from "react";
import styles from './SearchField.module.css';

const SearchField = React.forwardRef((props, ref) => (
    <div className={styles.searchWrapper}>
        <div className={styles.searchContainer}>
            <input
                type="text"
                className={styles.searchTextInput}
                ref={ref} name="main_search_field"
                id="search_field"
                placeholder="Search"
            />
        </div>
    </div>
));

export default SearchField;
