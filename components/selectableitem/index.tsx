import React from 'react'
import Styles from './selectableitem.module.css'
import Arrow from '../../assets/arrow.svg'

interface SelectableItemProps {
    text: string,
    id: string,
    selected?: boolean,
    onSelect?: Function
}

const SelectableItem: React.FC<SelectableItemProps> = (props) => {

    function getSelectedContent() {
        return props.selected && (
            <img className={Styles.itemIcon} src={Arrow} />
        )
    }

    function onSelect() {
        if (props.onSelect) {
            props.onSelect(props.id);
        }
    }

    return (
        <div {...props} onClick={() => onSelect()} className={Styles.selectableitem}>
            <span>{props.text}</span>
            {getSelectedContent()}
        </div>
    )
}

export default SelectableItem
