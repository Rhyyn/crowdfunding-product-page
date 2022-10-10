import React from "react";
import styles from "../../../styles/Content/Tiers.module.scss";

const Tiers = (data) => {


    return (
            <div className={styles.tierCard}>
                <div className={styles.tierHeader}>
                    <span className={styles.tierName}>{data.data.name}</span>
                    <span className={styles.tierPrice}>{data.data.pledge}</span>
                </div>
                <p className={styles.tierDesc}>
                    {data.data.desc}
                </p>
                <div className={styles.tierFooter}>
                    <div className={styles.tierAmountContainer}>
                        <span className={styles.tierAmountLeft}>{data.data.rewardsLeftNumber}</span>
                        <span className={styles.tierAmountText}>{data.data.rewardsLeftText}</span>
                    </div>
                    <button className={styles.tierSelectButton}>
                        {data.data.selectReward}
                    </button>
                </div>
            </div>
    );
};

export default Tiers;
