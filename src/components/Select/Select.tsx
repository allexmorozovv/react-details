import React, {KeyboardEvent, useEffect, useState} from "react";
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

    useEffect(() => {
        setHovered(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hovered) {
                    const applicantElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1];
                    if (applicantElement) {
                        props.onChange(applicantElement.value)
                      return;
                    }
                }
            }
            if (!selectedItem){
                props.onChange(props.items[0].value)
            }
        }
        if (e.key==="Enter"|| e.key==="Escape"){
            setActive(false)
        }
    }

    return (
        <>
            <div className={styles.select} tabIndex={0} onKeyUp={onKeyUp}>

                <span className={styles.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map((i, index) => <div
                            className={styles.item + " " + (hoveredItem === i ? styles.selected : '')}
                            key={i.value}
                            onMouseEnter={() => {
                                setHovered(i.value)
                            }}
                            onClick={() => {
                                onItemClick(i.value)
                            }}
                        >{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )

}