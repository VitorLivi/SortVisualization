import React from 'react'
import Button from '../button'
import Input from '../input'
import Styles from './footer.module.css'

import ConfigurationMapper from '../../mappers/configuration_mapper'

import { ConfigurationContext } from '../../pages'

interface FooterProps {

}

interface SeletedSort {
    id: string, 
    selected: boolean
}

interface ConsumerProps {
    setNumberOfColumns: Function,
    syncConfiguration: Function,
    configuration: object[],
    setConfiguration: Function,
    setMaxValue: Function,
    setMinValue: Function,
    selectableSorts: [SeletedSort]
    selectedSort: number,
    maxValue: number,
    minValue: number,
    numberOfColumns: number
}

const Footer: React.FC<FooterProps> =  () => {

    async function executeSortOperation(selectedSort : SeletedSort, configuration: [{value?: number, height?: number, index?: number}], setConfiguration: Function) {
        const sortProperties = ConfigurationMapper.sortTypeMapper[selectedSort.id];
        const newArray = [... await sortProperties.function(configuration)];
    }

    return (
        <ConfigurationContext.Consumer>
            {(props : ConsumerProps) => 
                <div id={Styles.footer}>
                    <div id={Styles.config}>
                        <Input type='number' value={props.minValue} onChange={(e) => props.setMinValue(e.target.value)} label='Min value' />
                        <Input type='number' value={props.maxValue} onChange={(e) => props.setMaxValue(e.target.value)} label='Max Value' />
                        <Input type='number' value={props.numberOfColumns} onChange={(e) => props.setNumberOfColumns(e.target.value)} label='Number of columns' />
                        <Button onClick={() => props.syncConfiguration()} text='Display'/>
                        <Button onClick={() => executeSortOperation(props.selectableSorts[props.selectedSort], props.configuration, props.setConfiguration)} text='Sort'/>
                    </div>
                </div>
            }
        </ConfigurationContext.Consumer>
    )
}

export default Footer
