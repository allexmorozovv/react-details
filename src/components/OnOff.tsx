import React, {useState} from "react";

type PropsType = {
    // on: boolean
}



export const OnOff = (props: PropsType) => {
    let [on,setOn]=useState(false)


    const onStyle = {
        width: '40px',
        height: '30px',
        backgroundColor: on?'green':'white',
        border: '1 px solid black ',
        display: 'inline-block',
        padding:'5px'
    }
    const offStyle = {
        width: '40px',
        height: '30px',
        backgroundColor: on?'white':'red',
        border: '1 px solid black ',
        display: 'inline-block',
        marginLeft: '2px',
        padding:'5px'
    }
    const indicatorStyle = {
        width: "10px",
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft:'5px',
        backgroundColor:on?'green':'red'
    }

    return (
        <div>
            <button style={onStyle} onClick={()=>{setOn(true)}}>On</button>
            <button style={offStyle}onClick={()=>{setOn(false)}}>Off</button>
            <div style={indicatorStyle}></div>

        </div>
    )
}