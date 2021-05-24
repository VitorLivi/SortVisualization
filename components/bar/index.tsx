import React, { StyleHTMLAttributes } from 'react'
import Styles from './Bar.module.css'

interface BarProps {
    configuration: [{value: number, height: number, index: number}]
}

const Bar: React.FC<BarProps> = (props) => {

    return (
        <div id={Styles.bar}>
            {props.configuration.map((e) => 
                <div key={e.index} ref={(el) => el != null ? el.style.height = e.height + "%" : null} className={Styles.element}>
                    <h2>{e.value}</h2>
                </div>
            )}
        </div>
    )
}

export default Bar;