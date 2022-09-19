import { useState } from "react";
import styles from "../../styles/globals.module.scss";
import Header from "../Components/Header";
import Content from "../Components/Content/Content";

function App() {
    return (
        <div className="App">
            <section className={styles.mainSection}>
                <Header></Header>
                {/* <div className={styles.backgroundImageContainer}>
                    <div className={styles.image}></div>
                </div> */}

                <div className={styles.backgroundWhite}>
                    <Content></Content>
                </div>
            </section>
        </div>
    );
}

export default App;
