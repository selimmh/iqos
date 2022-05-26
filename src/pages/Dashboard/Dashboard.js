import React from "react";
import styles from "./Dashboard.module.scss";

import { Banner, Weather, Market } from "../../components";

function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.container__widgets}>Widgets</div>
      <div className={styles.container__banner}>
        <Banner />
      </div>
      <div className={styles.container__weather}>
        <Weather />
      </div>
      <div className={styles.container__market}>
        <Market />
      </div>
    </div>
  );
}

export default Dashboard;
