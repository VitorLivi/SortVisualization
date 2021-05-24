import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Bar from '../components/bar'
import Styles from './Home.module.css'
import ConfigurationHelpers from '../helpers/configuration_helpers'

const Home: React.FC = () => {

    const [numberOfColumns , setNumberOfColumns] = useState(10);
    const [maxValue , setMaxValue] = useState(10);
    const [minValue , setMinValue] = useState(0);

    let configuration = ConfigurationHelpers.generateRandomConfiguration(numberOfColumns, maxValue, minValue);

    return (
        <div id={Styles.main}>
            <Navbar/>
            <div id={Styles.barWrapper}>
              <Bar configuration={configuration}/>
            </div>
        </div>
    )
}

export default Home