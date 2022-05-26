import React from 'react'
import './Toggle.scss'

function Toggle({ on, onToggle }) {
    return (
        <div>
            <label class='switch'>
                <input type='checkbox' />
                <span class='slider round'></span>
            </label>
        </div>
    )
}

export default Toggle
