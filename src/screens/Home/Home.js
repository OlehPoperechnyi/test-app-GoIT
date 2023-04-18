import React, {useRef, useState} from 'react';
import RepoCard from '../../components/RepoCard/RepoCard';
import Pagination from '../../components/Pagination/Pagination';
import SearchField from '../../components/SeachField/SearchField';
import styles from './Home.module.css';

const Home = () => {
    const searchFieldRef = useRef();
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <div className={styles.homeContainer}>
            <SearchField ref={searchFieldRef} />
            <div className={styles.repoCardsList}>
                <RepoCard />
            </div>
            <Pagination page={pageNumber} setPage={setPageNumber} length={10} />
        </div>
    );
}

export default Home;
