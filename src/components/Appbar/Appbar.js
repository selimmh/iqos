import React, { useContext, useState } from 'react'
import styles from './Appbar.module.scss'
import Drawer from '../Drawer/Drawer'

// icons
import { RiMenu2Fill } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { BsBookmarkDash } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'

function Appbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className={styles.container}>
            <div className={styles.container__left}>
                <div className={styles.container__left__hamburger}>
                    <RiMenu2Fill onClick={toggleMenu} />
                </div>
                <div className={styles.container__left__widgets}>widgets</div>
            </div>

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
            {isOpen && <Drawer />}
        </nav>
    )
}

export default Appbar
