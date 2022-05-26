import React, { useContext } from 'react'
import styles from './Drawer.module.scss'

// icons
import { FiDownloadCloud, FiUploadCloud } from 'react-icons/fi'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { RiArrowRightSLine } from 'react-icons/ri'

function Drawer() {
    return (
        <div className={styles.container}>
            <div className={styles.container__image}>
                <ul>
                    <li className={styles.container__image__upload}>
                        <FiUploadCloud />
                    </li>
                    <li className={styles.container__image__image}>
                        <img
                            src='https://via.placeholder.com/150'
                            alt='profile'
                        />
                    </li>
                    <li className={styles.container__image__upload}>
                        <FiDownloadCloud />
                    </li>
                </ul>
            </div>
            <div className={styles.container__form}>
                <form>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Name'
                    />
                    <input
                        type='text'
                        name='title'
                        id='title'
                        placeholder='Title'
                    />
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                    />
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                    />
                </form>
            </div>
            <div className={styles.container__checkboxes}>
                <h3>Email notifications</h3>
                <form>
                    <div>
                        <label htmlFor='checkbox'>Monday</label>
                        <input type='checkbox' name='monday' id='monday' />
                    </div>
                    <div>
                        <label htmlFor='checkbox'>Tuesday</label>
                        <input type='checkbox' name='tuesday' id='tuesday' />
                    </div>
                    <div>
                        <label htmlFor='checkbox'>Wednesday</label>
                        <input
                            type='checkbox'
                            name='wednesday'
                            id='wednesday'
                        />
                    </div>
                    <div>
                        <label htmlFor='checkbox'>Thursday</label>
                        <input type='checkbox' name='thursday' id='thursday' />
                    </div>
                    <div>
                        <label htmlFor='checkbox'>Friday</label>
                        <input type='checkbox' name='friday' id='friday' />
                    </div>
                </form>
            </div>
            <div className={styles.container__settings}>
                <div>
                    <RiArrowRightSLine />
                </div>
                <div>Save</div>
                <div>
                    <AiOutlinePoweroff />
                </div>
            </div>
        </div>
    )
}

export default Drawer
