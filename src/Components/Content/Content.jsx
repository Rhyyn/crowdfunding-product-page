import React from "react";
import styles from "../../../styles/Content/Content.module.scss";
import Intro from "./Intro";
import Status from "./Status";
import About from "./About";

const Content = () => {
    return (
        <section className={styles.contentSection}>
            <Intro></Intro>
            <Status></Status>
            <About></About>
        </section>
    );
};

export default Content;
