import React from 'react'
import Styles from './Button.module.css'

interface ButtonProps extends HTMLButtonElement{
    text?: string,
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button {...props} id={Styles.button}>
            <span>{props.text}</span>
        </button>
    )
}

export default Button;