import React, { useState } from 'react'
import Styles from './navbar.module.css'
import SelectableItem from '../selectableitem'
import ConfigurationMapper from '../../mappers/ConfigurationMapper'

interface NavbarProps {
    setSelectedSort: Function,
    selectableSorts: [{id: string, selected: boolean}],
    setSelectableSorts: Function,
}

const Navbar: React.FC<NavbarProps> = (props) => {

    function selectItem(id: string) {
        const { setSelectedSort, selectableSorts, setSelectableSorts} = props
        for (var i = 0; i < selectableSorts.length; i++) {
            if (selectableSorts[i].id === id){
                selectableSorts[i].selected = true
                setSelectedSort(i)
            } else {
                selectableSorts[i].selected = false
            }
        }
        setSelectableSorts([...selectableSorts])
    }

    function getSortTypeContent() {
        return (
            <div id={Styles.navigation}>
                {props.selectableSorts.map((e) => {
                    return <SelectableItem id={e.id} key={e.id} selected={e.selected} onSelect={selectItem} text={ConfigurationMapper.sortTypeMapper[e.id].name} />
                })}
            </div>
            
        )
    }

    return (
        <div id={Styles.navbar}>
            <h2>Sort Visualization</h2>
            {getSortTypeContent()}
        </div>
    )
}

export default Navbar
