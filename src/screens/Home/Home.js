import React, {useRef} from 'react';
import RepoCard from '../../components/RepoCard/RepoCard';
import SearchField from '../../components/SeachField/SearchField';
import styles from './Home.module.css';

const Home = () => {
    const searchFieldRef = useRef();

    return (
        <div className={styles.homeContainer}>
            <SearchField ref={searchFieldRef} />
            <div className={styles.repoCardsList}>
                <RepoCard />
            </div>
        </div>
    );
}

export default Home;
