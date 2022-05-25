import React from "react";
import styles from "./Appbar.module.scss";

// icons
import { RiMenu2Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsBookmarkDash } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

function Appbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.container__hamburger}>
        <RiMenu2Fill />
      </div>

      <div className={styles.container__widgets}>widgets</div>

      <div className={styles.container__logo}>
        <p>N</p>
      </div>
      <div className={styles.container__actions}>
        <ul>
          <li>
            <AiOutlinePlus />
          </li>
          <li>
            <FiSearch />
          </li>
          <li>
            <CgProfile />
          </li>
          <li>
            <BsBookmarkDash />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Appbar;
