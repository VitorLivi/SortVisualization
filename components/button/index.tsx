import React from 'react'
import Styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string
}

/**
 * Button.
 *
 * @param {ButtonProps} props button's props
 * @returns {React.FC<ButtonProps>} Button.
 */

const Button: React.FC<ButtonProps> = (props) => {

    const handleClick = () => {
        if (!props.disabled && props.onClick) {
            props.onClick()
        }
    }

    return (
        <button {...props} onClick={handleClick} className={Styles.button}>
            <span>{props.text}</span>
        </button>
    )
}

export default Button;