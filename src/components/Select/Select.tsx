import React, {useState} from "react";
import styles from "./Select.module.css"

type ItemType = {
    value: any
    title: string
}


type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hovered, setHovered] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hovered)

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    return (
        <>
            <div className={styles.select}>

                <span className={styles.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map((i, index) => <div
                            className={styles.item + " " + (hoveredItem === i ? styles.selected : '')}
                            key={i.value}
                            onMouseEnter={() => {setHovered(i.value)}}
                            onClick={() => {onItemClick(i.value)}}
                        >{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )

}