import React from "react";
import styles from "../../../styles/Content/Content.module.scss";

const Content = () => {
    return (
        <section className={styles.contentSection}>
            <div className={styles.introContainer}>
                <img
                    className={styles.logoMastercraft}
                    src="images/logo-mastercraft.svg"
                />
                <h1 className={styles.introTitle}>
                    Mastercraft Bamboo Monitor Riser
                </h1>
                <p className={styles.introDesc}>
                    A beautiful & handcrafted monitor stand to reduce neck and
                    eye strain.
                </p>
                <div className={styles.buttonsContainer}>
                    <button className={styles.backButton}>
                        Back this project
                    </button>
                    <button className={styles.bookmarkButton}>
                        <svg
                            className={styles.svg}
                            width="56"
                            height="56"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g fill="none" fill-rule="evenodd">
                                <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                                <path
                                    fill="#B1B1B1"
                                    d="M23 19v18l5-5.058L33 37V19z"
                                />
                            </g>
                        </svg>
                        <div className = {styles.bookmarkTextContainer}>
                            <span className={styles.bookmarkText}>
                                Bookmark
                            </span>
                        </div>
                    </button>
                </div>
            </div>
            <div className={styles.statusContainer}></div>
        </section>
    );
};

export default Content;
