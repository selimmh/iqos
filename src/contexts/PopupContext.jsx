import React, { useState, createContext } from 'react'

export const PopupContext = createContext()

const PopupContextWrapper = ({ children }) => {
    const [popupOpened, setPopupOpened] = useState(false)

    const togglePopup = () => {
        setPopupOpened(!popupOpened)
    }

    const closePopup = () => {
        setPopupOpened(false)
    }

    const openPopup = () => {
        setPopupOpened(true)
    }

    return (
        <PopupContext.Provider
            value={{ popupOpened, togglePopup, closePopup, openPopup }}
        >
            {children}
        </PopupContext.Provider>
    )
}

export default PopupContextWrapper
