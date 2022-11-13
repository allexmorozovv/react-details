import React, {useState} from "react";

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}


export const UncontrolledOnOff = (props: PropsType) => {
    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)


    const onStyle = {
        width: '40px',
        height: '30px',
        backgroundColor: on ? 'green' : 'white',
        border: '1 px solid black ',
        display: 'inline-block',
        padding: '5px'
    }
    const offStyle = {
        width: '40px',
        height: '30px',
        backgroundColor: on ? 'white' : 'red',
        border: '1 px solid black ',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '5px'
    }
    const indicatorStyle = {
        width: "10px",
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const ofClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <button style={onStyle} onClick={onClicked}>On</button>
            <button style={offStyle} onClick={ofClicked}>Off</button>
            <div style={indicatorStyle}></div>

        </div>
    )
}