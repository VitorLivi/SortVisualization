import React, { useState } from 'react'
import Button from '../button'
import Input from '../input'
import Styles from './footer.module.css'

import { ConfigurationContext } from '../../pages'

interface FooterProps {

}

interface ConsumerProps {
    syncConfiguration: Function,
    setMaxValue: Function,
    setMinValue: Function,
    maxValue: number,
    minValue: number,
    numberOfColumns: number,
    setNumberOfColumns: Function
}

const Footer: React.FC<FooterProps> = () => {

    return (
        <ConfigurationContext.Consumer>
            {(props : ConsumerProps) => 
                <div id={Styles.footer}>
                    <div id={Styles.config}>
                        <Input type='number' value={props.minValue} onChange={(e) => props.setMinValue(e.target.value)} label='Min value' />
                        <Input type='number' value={props.maxValue} onChange={(e) => props.setMaxValue(e.target.value)} label='Max Value' />
                        <Input type='number' value={props.numberOfColumns} onChange={(e) => props.setNumberOfColumns(e.target.value)} label='Number of columns' />
                        <Button onClick={() => props.syncConfiguration()} text='Display'/>
                        <Button text='Sort'/>
                    </div>
                </div>
            }
        </ConfigurationContext.Consumer>
    )
}

export default Footer
