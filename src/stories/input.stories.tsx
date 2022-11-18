import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'input',
    // component: input,
};

export const UncotrolledInput = () => <input/>;

export const TrackValueOfUncotrolledInput = () => {
    const [value, setValue] = useState("")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <> <input value={value} onChange={onChange}/>-{value}</>
}
export const GetValueOfUncotrolledInput = () => {

    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const saveInputValue = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <> <input ref={inputRef}/>
        <button onClick={saveInputValue}>save</button>
        - actual value: {value}</>
}

export const CotrolledInputWithFixedValue = () => <input value={"Alex"}/>;