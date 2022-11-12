import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(true)
    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }

    return <div>
        <AccordionTitle title={props.title} onClick={onClickHandler}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {

    const onClickHandler = () => {
        props.onClick()
    }
    return <h3 onClick={onClickHandler}>{props.title}</h3>
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