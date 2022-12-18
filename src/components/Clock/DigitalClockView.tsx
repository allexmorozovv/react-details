import React from "react";
import {ClockViewPropsType} from "./Clock";

export const setZeroToTime = (num: number) => num < 10 ? '0' + num : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <> <span>{setZeroToTime(date.getHours())}</span>
        :
        <span>{setZeroToTime(date.getMinutes())}</span>
        :
        <span>{setZeroToTime(date.getSeconds())}</span></>
}