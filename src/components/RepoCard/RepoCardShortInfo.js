import React from "react";
import styles from './RepoCard.module.css';
import REPO_INFO_WATCHERS from "../../consts/general";

const RepoCardShortInfo = ({icon, number, type}) => {
    return <div className={styles.repoCardShortInfo}>
        <img src={icon} alt="some image" className={styles.repoCardShortInfoImage} />
        <p className={`${styles.repoCardSmallText} 
            ${styles.repoCardShortInfoText} 
            ${type === REPO_INFO_WATCHERS && styles.boldDescriptionText}`}>
            <span className={styles.boldDescriptionText}>{number}</span> {type}
        </p>
    </div>
};

export default RepoCardShortInfo;
