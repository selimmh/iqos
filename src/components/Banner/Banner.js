import React from "react";
import styles from "./Banner.module.scss";

import { FiRadio } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";

function Banner() {
  return (
    <div className={styles.container}>
      <h1>Astronauts could land on Red Planet by 2039 </h1>
      <div>
        <div>
          <div>
            <span>
              <FiRadio />
            </span>
            <p>SPACE.com</p>
          </div>
          <div>
            <span>
              <AiOutlineClockCircle />
            </span>
            <p>20m ago</p>
          </div>
        </div>
        <p>SCIENCE</p>
      </div>
    </div>
  );
}

export default Banner;
