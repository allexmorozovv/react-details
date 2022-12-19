import React, {useEffect, useState} from "react";
import {log} from "util";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    console.log('SimpleExample')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = `нажали ${counter.toString()} раз`

    },)

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = `нажали ${counter.toString()} раз`

    }, [])

    useEffect(() => {
        console.log('useEffect when counter change')
        document.title = `нажали ${counter.toString()} раз`

    }, [counter])

    return <>
        Hello,{counter}
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        {fake}
    </>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    // useEffect(() => {
    //
    //     setTimeout(()=>{
    //         document.title = `нажали ${counter.toString()} раз`
    //     },1000)
    // },[counter])

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])


    return <>
        Hello, counter: {counter}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        --fake: {fake}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('ResetEffectExample rendered' + counter)

    useEffect(() => {
        console.log('Effect occurred' + counter)
        return () => {
            console.log('Reset effect' + counter)
        }
    }, [])
    return <>
        Hello, counter: {counter}
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('KeysTrackerExample rendered' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        console.log('Effect occurred')
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])
    return <>
        Typed text: {text}
    </>
}

