import React, { useState } from 'react'
import Button from '../button'
import Input from '../input'
import Styles from './footer.module.css'

import { ConfigurationContext } from '../../pages'

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {

    const [numberOfColumns , setNumberOfColumns] = useState(10)
    const [maxValue , setMaxValue] = useState(20)
    const [minValue , setMinValue] = useState(-10)

    return (
        <ConfigurationContext.Consumer>
            {({ setConfiguration } : { setConfiguration: Function }) => 
                <div id={Styles.footer}>
                    <div id={Styles.config}>
                        <Input type='number' value={minValue} onChange={(e) => setMinValue(e.target.value)} label='Min value' />
                        <Input type='number' value={maxValue} onChange={(e) => setMaxValue(e.target.value)} label='Max Value' />
                        <Input type='number' value={numberOfColumns} onChange={(e) => setNumberOfColumns(e.target.value)} label='Number of columns' />
                        <Button onClick={() => {setConfiguration({minValue: minValue, maxValue: maxValue, numberOfColumns: numberOfColumns})}} text='Display'/>
                        <Button text='Sort'/>
                    </div>
                </div>
            }
        </ConfigurationContext.Consumer>
    )
}

export default Footer
