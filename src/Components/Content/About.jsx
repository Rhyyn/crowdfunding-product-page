import React from "react";
import styles from "../../../styles/Content/About.module.scss";
import Tiers from "./Tiers";
import tiersData from "../../../public/tiersData.json";

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.title}>About this project</h1>
            <span className={styles.desc}>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                platform that elevates your screen to a more comfortable viewing
                height. Placing your monitor at eye level has the potential to
                improve your posture and make you more comfortable while at
                work, helping you stay focused on the task at hand.
                <br></br>
                <br></br>
                Featuring
                artisan craftsmanship, the simplicity of design creates extra
                desk space below your computer to allow notepads, pens, and USB
                sticks to be stored under the stand.
            </span>
            {tiersData.tiers.map((tier, index) => {
                return <Tiers data={tier}></Tiers>
            })}
        </div>
    );
};

export default About;
