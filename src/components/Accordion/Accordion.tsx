import React, {useState} from "react";

export type AccordionPropsType = {
    title: string
    collapsed:boolean
    /**
     * OnClick that is called when header clicked
     * @param value
     */
    onClick:(value:boolean)=>void

}

export const Accordion = (props: AccordionPropsType) => {

    return <div>
        <AccordionTitle title={props.title} onClick={()=>props.onClick(!props.collapsed)}
                        // collapsed={props.collapsed}
        />
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
    // collapsed:boolean
    // onClick:(value:boolean)=>void

}
const AccordionTitle = (props: AccordionTitlePropsType) => {

    return <h3 onClick={()=>props.onClick()}>{props.title}</h3>
    // return <h3 onClick={()=>props.onClick(!props.collapsed)}>{props.title}</h3>
}
const AccordionBody = () => {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}