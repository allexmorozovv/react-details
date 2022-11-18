import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'input',
    // component: input,
};

export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <> <input value={value} onChange={onChange}/>-{value}</>
}
export const GetValueOfUncontrolledInput = () => {

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


export const ControlledInput = () => {
    const [parentValue,setParentValue]=useState("")
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.value)
    }
return<input value={parentValue} onChange={onChangeHandler}/>
}
export const ControlledCheckbox = () => {
    const [parentValue,setParentValue]=useState(false)
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.checked)
    }
    return<input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
}
export const ControlledSelect = () => {
    const [parentValue,setParentValue]=useState<string|undefined>(undefined)
    const onChangeHandler=(e:ChangeEvent<HTMLSelectElement>)=>{
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHandler}>
        <option >none</option>
        <option value={'1'}>Rome</option>
        <option value={'2'}>Paris</option>
        <option value={'3'}>London</option>
    </select>

}

export const ControlledInputWithFixedValue = () => <input value={"Alex"}/>;