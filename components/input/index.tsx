import React from 'react'
import Styles from './Input.module.css'

interface InputProps extends HTMLInputElement {
    label?: string,
    ref?: React.Ref<any>
}

/**
 * Input.
 *
 * @param {InputProps} props Input's props
 * @returns {React.FC<InputProps>} Input.
 */

const Input: React.FC<InputProps> = (props) => {

    function getLabel() : string | undefined {
        const { label } = props;

        if ( label && typeof label == 'string') {
            return props.label
        }
    }

    return (
        <div>
            <span className={Styles.label}>{getLabel()}</span>
            <input {...props} className={Styles.input} />
        </div>
    )
}

export default Input
