import React from "react";
import styles from "../../../styles/Content/Content.module.scss";

const Content = () => {
    return (
        <section className={styles.contentSection}>
            <div className={styles.introContainer}></div>
            <div className={styles.statusContainer}></div>
        </section>
    );
};

export default Content;
