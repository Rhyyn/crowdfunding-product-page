import React from "react";
import styles from "../../../styles/Content/Content.module.scss";
import Intro from "./Intro";
import Status from "./Status";

const Content = () => {
    return (
        <section className={styles.contentSection}>
            <Intro></Intro>
            <Status></Status>
        </section>
    );
};

export default Content;
