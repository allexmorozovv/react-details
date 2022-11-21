import React, {useReducer} from "react";
import {reducer} from "./Reducer";

type AccordionPropsType = {
    title: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {

    // let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    // const onClickHandler = () => {setCollapsed(!collapsed)}
    const onClickHandler = () => {dispatch({type: "TOGGLE-COLLAPSED"})}

    return <div>
        <AccordionTitle title={props.title} onClick={onClickHandler}/>
        {!state.collapsed && <AccordionBody/>}
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