import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({length, page, setPage}) => {
    const pages = Array.from({ length }).map((_, i) => i + 1);

    return (
        <div className={styles.paginationContainer}>
            <button
                type="button"
                className={styles.paginationButton}
                onClick={() => setPage(page - 1 > 0 ? page - 1 : 1)}
            >
                <p className={styles.paginationText}>Previous</p>
            </button>
            {pages.map((value, index) => (
                <button
                    key={`${value}`}
                    type="button"
                    onClick={() => setPage(index + 1)}
                    className={`${styles.paginationButton} ${page === index + 1 && styles.paginationSelectedButton}`}
                >
                    <p className={styles.paginationText}>{value}</p>
                </button>
            ))}
            <button
                type="button"
                className={styles.paginationButton}
                onClick={() => setPage(page + 1 <= length ? page + 1 : length)}
            >
                <p className={styles.paginationText}>Next</p>
            </button>
        </div>
    );
};

export default Pagination;
