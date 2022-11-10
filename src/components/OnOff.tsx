import React, {useState} from "react";

type PropsType = {
   callBack:( onControlled:boolean)=>void
    onControlled:boolean
}



export const OnOff = (props: PropsType) => {



    const onStyle = {
        width: '40px',
        height: '30px',
        backgroundColor: props.onControlled?'green':'white',
        border: '1 px solid black ',
        display: 'inline-block',
        padding:'5px'
    }
    const offStyle = {
        width: '40px',
        height: '30px',
        backgroundColor: props.onControlled?'white':'red',
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
        backgroundColor:props.onControlled?'green':'red'
    }

    return (
        <div>
            <button style={onStyle} onClick={()=>props.callBack(true)}>On</button>
            <button style={offStyle}onClick={()=>{props.callBack(false)}}>Off</button>
            <div style={indicatorStyle}></div>

        </div>
    )
}