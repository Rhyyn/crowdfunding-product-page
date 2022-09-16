import React from "react";
import styles from "../../../styles/Content/Status.module.scss";

const Status = () => {
    return (
        <div className={styles.statusContainer}>
            <div className={styles.numbersContainer}>
                <div className={styles.individualNumberContainer}>
                    <span className={styles.number}>$89,914</span>
                    <span className={styles.text}>of $100,000 backed</span>
                </div>
                <div className={styles.individualNumberContainer}>
                    <span className={styles.number}>5,007</span>
                    <span className={styles.text}>total backers</span>
                </div>
                <div className={styles.individualNumberContainer}>
                    <span className={styles.number}>56</span>
                    <span className={styles.text}>days left</span>
                </div>
            </div>
            <div className={styles.progressBarContainer}></div>
        </div>
    );
};

export default Status;
