import React, {useEffect, useState} from "react";

const setZeroToTime = (num: number) => num < 10 ? '0' + num : num

export const Clock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <div>
        <span>{setZeroToTime(date.getHours())}</span>
        :
        <span>{setZeroToTime(date.getMinutes())}</span>
        :
        <span>{setZeroToTime(date.getSeconds())}</span>
    </div>
}