import React from "react";
import styles from './RepoCard.module.css';
import RepoCardShortInfo from "./RepoCardShortInfo";
import RepoCardMainInfo from "./RepoCardMainInfo";
import logo from '../../assets/svg/logo.svg';
import star from '../../assets/svg/star.svg';
import watcher from '../../assets/svg/watcher.svg';

const RepoCard = () => (
    <div className={styles.repoCardContainer}>
        <RepoCardMainInfo name="Repo name" description="Description" language="Language" author="Author" image={logo} />
        <div className={styles.repoCardOtherInfoBlock}>
            <RepoCardShortInfo type="stars" icon={star} number={146} />
            <RepoCardShortInfo type="watchers" icon={watcher} number={146} />
        </div>
    </div>
);

export default RepoCard;
