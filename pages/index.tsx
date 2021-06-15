import React, { useState, createContext, useEffect } from 'react'
import Navbar from '../components/navbar'
import Bar from '../components/bar'
import Footer from '../components/footer'

import Styles from './Home.module.css'

import ConfigurationHelpers from '../helpers/configuration_helpers'

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
    const [configuration, setConfiguration] = useState(ConfigurationHelpers.generateRandomConfiguration(10, 0, 0))

    function handleConfiguration() {        
        const newConfiguration = ConfigurationHelpers.generateRandomConfiguration(
            numberOfColumns, 
            maxValue, 
            minValue
        );

        setConfiguration(newConfiguration)
    }

    useEffect(() => {
        handleConfiguration();
    }, [])

    const providerValues = {
        syncConfiguration: handleConfiguration,
        maxValue: maxValue,
        minValue: minValue,
        numberOfColumns: numberOfColumns,
        setMaxValue: setMaxValue,
        setMinValue: setMinValue,
        setNumberOfColumns: setNumberOfColumns
    }

    return (
        <ConfigurationContext.Provider value={providerValues}>
            <div id={ Styles.main }>
                <Navbar/>
                <div id={ Styles.barWrapper }>
                    <Bar configuration={ configuration }/>
                </div>
                <Footer/>
            </div>
        </ConfigurationContext.Provider>
    )
}

export default Home