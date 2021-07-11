import React, {useState} from 'react'
import Button from '../button'
import Input from '../input'
import Styles from './footer.module.css'

import ConfigurationMapper from '../../mappers/ConfigurationMapper'
import MainProviderInterface from '../../interfaces/sharedInterfaces'

import { ConfigurationContext } from '../../pages'

interface SeletedSort {
    id: string, 
    selected: boolean
}

interface FooterProps {

}

const Footer: React.FC<FooterProps> =  () => {

    const [disabledButtons, setDisabledButtons] = useState(false)

    function executionHandler(moment: string) {

        if (moment === 'before')  {
            setDisabledButtons(true)
            updateButtonsStyle('lightgray')
        }

        if (moment === 'after')  {
            setDisabledButtons(false)
            updateButtonsStyle('white')
        }

    }

    function updateButtonsStyle(color: string) {
        const displayButton = document.getElementById("display")
        const sortButton = document.getElementById("sort")

        if (displayButton) {
            displayButton.style.backgroundColor = color
        }

        if (sortButton) {
            sortButton.style.backgroundColor = color
        }
    }

    const executeSortOperation = async (selectedSort : SeletedSort, configuration: [{value?: number, height?: number, index?: number}], velocity: Number) => {
        const sortProperties = ConfigurationMapper.sortTypeMapper[selectedSort.id]

        executionHandler('before')
        await sortProperties.function(configuration, velocity)
        executionHandler('after')
    }

    return (
        <ConfigurationContext.Consumer>
            {(props : MainProviderInterface) => {
                const {
                        minValue, maxValue, numberOfColumns, velocity, setMinValue, setMaxValue, setVelocity, 
                        setNumberOfColumns, syncConfiguration, selectableSorts, selectedSort, configuration
                    } = props;

                return (
                    <div id={Styles.footer}>
                        <div id={Styles.config}>
                            <Input type='number' value={minValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMinValue(e.target.value)} label='Min value' />
                            <Input type='number' value={maxValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaxValue(e.target.value)} label='Max Value' />
                            <Input type='number' value={numberOfColumns} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumberOfColumns(e?.target?.value)} label='Number of columns' />
                            <Input type='number' value={velocity} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVelocity(e.target.value)} label='Velocity (sec)' />
                            <Button id="display" disabled={disabledButtons} 
                                onClick={() => syncConfiguration()} 
                                text='Display'
                            />
                            <Button id="sort" disabled={disabledButtons} 
                                onClick={() => executeSortOperation(selectableSorts[selectedSort], configuration, velocity)}
                                text='Sort'
                            />
                        </div>
                    </div>
                )
            }}
        </ConfigurationContext.Consumer>
    )
}

export default Footer
