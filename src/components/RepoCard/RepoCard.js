import React from "react";
import styles from './RepoCard.module.css';
import RepoCardShortInfo from "./RepoCardShortInfo";
import RepoCardMainInfo from "./RepoCardMainInfo";
import logoIcon from '../../assets/svg/logo.svg';
import starIcon from '../../assets/svg/star.svg';
import watcherIcon from '../../assets/svg/watcher.svg';

const RepoCard = ({name, description, language, author, stars, watchers}) => (
    <div className={styles.repoCardContainer}>
        <RepoCardMainInfo name={name} description={description} language={language} author={author} image={logoIcon} />
        <div className={styles.repoCardOtherInfoBlock}>
            <RepoCardShortInfo type="stars" icon={starIcon} number={stars} />
            <RepoCardShortInfo type="watchers" icon={watcherIcon} number={watchers} />
        </div>
    </div>
);

export default RepoCard;
