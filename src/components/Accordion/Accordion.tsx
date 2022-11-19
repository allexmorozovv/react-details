import React, {useState} from "react";

type ItemType = {
    value: any
    title: string
}

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    /**
     * OnClick that is called when header clicked
     * @param value
     */
    onClick: (value: boolean) => void
    items: Array<ItemType>
    onItemClick: (value: any) => void
}

export const Accordion = (props: AccordionPropsType) => {

    return <div>
        <AccordionTitle title={props.title} onClick={() => props.onClick(!props.collapsed)}
            // collapsed={props.collapsed}
        />
        {!props.collapsed && <AccordionBody items={props.items} onItemClick={props.onItemClick}/>}
    </div>
}



type AccordionTitlePropsType = {
    title: string
    onClick: () => void

}

const AccordionTitle = (props: AccordionTitlePropsType) => {

    return <h3 onClick={() => props.onClick()}>{props.title}</h3>
    // return <h3 onClick={()=>props.onClick(!props.collapsed)}>{props.title}</h3>
}



type AccordionBodyPropsType = {
    items: Array<ItemType>
    onItemClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return <div>
        <ul>
            {props.items.map((i, index) => <li onClick={() => {
                props.onItemClick(i.value)
            }} key={index}>{i.title}</li>)}
        </ul>
    </div>
}