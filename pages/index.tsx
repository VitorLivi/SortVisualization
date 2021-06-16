import React, { useState, createContext, useEffect } from 'react'
import Navbar from '../components/navbar'
import Bar from '../components/bar'
import Footer from '../components/footer'

import Styles from './Home.module.css'

import ConfigurationHelpers from '../helpers/configuration_helpers'
import configuration_constants from '../constants/configuration_constants'

interface ConfigurationContextI {
    setMinValue: Function,
    setMaxValue: Function,
    setNumberOfColumns: Function
}

export const ConfigurationContext: React.Context<any> = createContext({});

const Home: React.FC = () => {

    const [maxValue , setMaxValue] = useState(20)
    const [minValue , setMinValue] = useState(1)
    const [numberOfColumns , setNumberOfColumns] = useState(10)
    const [selectedSort , setSelectedSort] = useState(0)
    
    let [configuration, setConfiguration] = useState(ConfigurationHelpers.generateRandomConfiguration(10, 0, 0))
    let [selectableSorts, setSelectableSorts] = useState(getInitialItemsData());

    function handleConfiguration() {        
        const newConfiguration = ConfigurationHelpers.generateRandomConfiguration(
            numberOfColumns, 
            maxValue, 
            minValue
        );

        setConfiguration(newConfiguration)
    }

    function getInitialItemsData() : Array<any> {
        const sortTypesArray = Object.values(configuration_constants.sortTypes);

        for (var i = 0; i < sortTypesArray.length; i++) {
            sortTypesArray[i] = {
                id: sortTypesArray[i],
                selected: i == 0 ? true : false
            }
        }
        
        return sortTypesArray;
    }

    useEffect(() => {
        handleConfiguration();
    }, [])

    const providerValues = {
        syncConfiguration: handleConfiguration,
        configuration: configuration,
        maxValue: maxValue,
        minValue: minValue,
        numberOfColumns: numberOfColumns,
        selectedSort: selectedSort,
        selectableSorts: selectableSorts,
        setMaxValue: setMaxValue,
        setMinValue: setMinValue,
        setConfiguration: setConfiguration,
        setNumberOfColumns: setNumberOfColumns
    }

    return (
        <ConfigurationContext.Provider value={providerValues}>
            <div id={ Styles.main }>
                <Navbar selectableSorts={selectableSorts} setSelectableSorts={setSelectableSorts} setSelectedSort={setSelectedSort}/>
                <div id={ Styles.barWrapper }>
                    <Bar configuration={ configuration }/>
                </div>
                <Footer />
            </div>
        </ConfigurationContext.Provider>
    )
}

export default Home