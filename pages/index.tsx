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

    const initialConfiguration = {
        numberOfColumns: 10, 
        maxValue: 20, 
        minValue: 1
    }

    const [maxValue , setMaxValue] = useState(0)
    const [minValue , setMinValue] = useState(20)
    const [numberOfColumns , setNumberOfColumns] = useState(10)
    const [configuration, setConfiguration] = useState(ConfigurationHelpers.generateRandomConfiguration(10, 0, 0))

    interface confPropsI {
        minValue: number, 
        maxValue: number, 
        numberOfColumns: number
    }

    function handleConfiguration( { numberOfColumns, maxValue, minValue } : confPropsI ) {        
        const newConfiguration = ConfigurationHelpers.generateRandomConfiguration(numberOfColumns, maxValue, minValue);

        setConfiguration(newConfiguration)
    }

    useEffect(() => {
        handleConfiguration(initialConfiguration);
    }, [])

    return (
        <ConfigurationContext.Provider value={{
            setConfiguration: handleConfiguration
        }}>
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