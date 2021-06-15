import React, { useState } from 'react'
import Styles from './navbar.module.css'
import SelectableItem from '../selectableitem'
import configuration_constants from '../../constants/configuration_constants'
import configuration_mapper from '../../mappers/configuration_mapper'

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {

    let [selectableItems, setSelectableItems] = useState(getInitialItemsData());

    function getInitialItemsData() : Array<any> {
        const sortTypesArray = Object.values(configuration_constants.sortTypes);

        for (var i = 0; i < sortTypesArray.length; i++) {
            sortTypesArray[i] = {
                id: sortTypesArray[i],
                selected: false
            }
        }

        return sortTypesArray;
    }

    function selectItem(id: string) {
        for (var i = 0; i < selectableItems.length; i++) {
            if (selectableItems[i].id === id){
                selectableItems[i].selected = true;
            } else {
                selectableItems[i].selected = false;
            }
        }
        setSelectableItems([...selectableItems]);
    }

    function getSortTypeContent() {
        return (
            <div id={Styles.navigation}>
                {selectableItems.map((e) => {
                    return <SelectableItem id={e.id} key={e.id} selected={e.selected} onSelect={selectItem} text={configuration_mapper.sortTypeMapper[e.id].name} />
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
