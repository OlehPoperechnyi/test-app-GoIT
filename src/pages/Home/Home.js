import React, {useEffect, useMemo, useRef, useState} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import RepoCard from '../../components/RepoCard/RepoCard';
import Pagination from '../../components/Pagination/Pagination';
import SearchField from '../../components/SeachField/SearchField';
import styles from './Home.module.css';
import {getGitHubRepositories} from "../../store/ghRepositories/slice";

const Home = () => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state?.ghRepositories || {}, shallowEqual);
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState('');

    const timer = useRef(null);

    const numberOfPages = data?.length % 20 === 0 ? data?.length / 20 : data?.length / 20 + 1;

    const list = useMemo(() => data?.filter((item, index) => {
        const firstItem = (pageNumber - 1) * 20;
        const lastItem = pageNumber * 20;
        return index >= firstItem && index < lastItem;
    }), [pageNumber, data]);

    const isListEmpty = !list?.length && !loading;

    const onChange = (e) => {
      setSearch(e.target.value);
    }

    const onSearch = () => dispatch(getGitHubRepositories({ search }));
    const searchChats = () => {
        clearTimeout(timer.current);
        timer.current = setTimeout(onSearch, 500);
    };

    useEffect(() => {
        searchChats();
    }, [search]);

    return (
        <div className={styles.homeContainer}>
            <SearchField  onChange={onChange} />
            <div className={`${styles.repoCardsList} ${isListEmpty && styles.emptyList}`}>
                {list?.map(
                    ({id, name, description, owner, stargazers_count: stars, watchers, language}) => (
                    <RepoCard
                        key={id}
                        name={name}
                        description={description}
                        author={owner?.login}
                        stars={stars}
                        language={language}
                        watchers={watchers}
                    />
                ))}
                {isListEmpty && <p>По Вашому запиту не знайдено жодного репозиторія</p>}
                {!!list?.length && !loading && (
                    <Pagination page={pageNumber} setPage={setPageNumber} length={+numberOfPages} />
                )}
            </div>
        </div>
    );
}

export default Home;
