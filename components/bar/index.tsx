import React, { StyleHTMLAttributes, useEffect } from 'react'
import Styles from './Bar.module.css'

interface BarProps {
    configuration: [{value: number, height: number, index: number}]
}

const Bar: React.FC<BarProps> = (props) => {

    const styleByValue = (value: number) => {
        return value < 0 ? {backgroundColor: 'black', color: 'white'} : {backgroundColor: 'white', color: 'black'} 
    }

    if (props.configuration.length > 0){
        return (
            <div id={Styles.bar}>
                {props.configuration.map((e) => 
                    <div key={e.index} ref={(el) => el != null ? el.style.height = e.height + "%" : null} style={{order: e.index, ...styleByValue(e.value)}} className={Styles.element}>
                        <h2>{e.value}</h2>
                    </div>
                )}
            </div>
        )
    } else {
        return null
    }
}

export default Bar;