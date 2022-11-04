import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
    if (props.collapsed) {
        return <div>
            <AccordionTitle title={props.title}/>

        </div>
    } else {
        return <div>
            <AccordionTitle title={props.title}/>
            {! props.collapsed && <AccordionBody/> }
        </div>
    }

}



type AccordionTitlePropsType = {
    title: string
}
const AccordionTitle = (props: AccordionTitlePropsType) => {

    return <h3>{props.title}</h3>
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