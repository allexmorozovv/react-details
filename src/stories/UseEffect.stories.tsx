import React, {useEffect, useState} from "react";

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