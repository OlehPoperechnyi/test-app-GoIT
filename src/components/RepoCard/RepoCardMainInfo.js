import React from "react";
import styles from './RepoCard.module.css';
import logo from "../../assets/svg/logo.svg";

const RepoCardMainInfo = ({name, author, language, description, image}) => {
    return (
        <div className={styles.repoCardMainInfoBlock}>
            <img src={image || logo} alt={`repo ${name} card`} className={styles.repoCardImage} />
            <div className={styles.repoCardInfo}>
                <p className={styles.repoCardName}>{name}</p>
                <p className={styles.repoCardSmallText}>{author}</p>
                <p className={styles.repoCardSmallText}>{language}</p>
                <p className={`${styles.repoCardSmallText} ${styles.repoCardSmallText} ${styles.repoCardDescription}`}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default RepoCardMainInfo;
