import React from "react";
import styles from "../../styles/Header/Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className = {styles.headerDivContainer}>
                <img className={styles.brandLogo} src="images/logo.svg" />
                <ol className={styles.list}>
                    <li className={styles.listItem}>About</li>
                    <li className={styles.listItem}>Discover</li>
                    <li className={styles.listItem}>Get Started</li>
                </ol>
            </div>
        </header>
    );
};

export default Header;
