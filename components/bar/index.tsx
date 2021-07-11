import React, { StyleHTMLAttributes, useEffect } from 'react'
import Styles from './Bar.module.css'

interface BarProps {
    configuration: [{value?: number, height?: number, index?: number}]
}

const Bar: React.FC<BarProps> = (props) => {

    const styleByValue = (value: number) => {
        return value < 0 ? {backgroundColor: 'lightgray', color: 'white'} : {backgroundColor: '#87CEEB', color: 'black'} 
    }

    const setInitialHeight = (element, config) => {
        if (element != null) {
            element.style.height = config.height + "%";
        }
    }

    const getBars = () => {
        if (props.configuration.length > 0){
            return (
                <React.Fragment>
                    {props.configuration.map((config, index) => {
                        return (
                            <div 
                                id={'bar' + config.index} 
                                ref={(element) => setInitialHeight(element, config)} 
                                style={{order: config.index, ...styleByValue(config.value)}} 
                                className={Styles.element}>
                                <h2>{ config.value }</h2>
                            </div>
                        )
                    })}
                </React.Fragment>
            )
        }

        return null
    }
    
    return (
        <div id={'bar'} className={Styles.bar}>
            {getBars()}
        </div>
    )
}

export default Bar;