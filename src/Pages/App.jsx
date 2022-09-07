import { useState } from "react";
import styles from "../../styles/globals.module.scss";
import Header from "../Components/Header";

function App() {
    return (
        <div className="App">
            <section className={styles.mainSection}>
                <div className={styles.backgroundImageContainer}>
                    <div className={styles.image}>
                      <Header></Header>
                    </div>
                </div>
                <div className={styles.backgroundWhite}></div>
            </section>
        </div>
    );
}

export default App;
