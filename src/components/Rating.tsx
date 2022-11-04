import React from "react";

type RatingType = {
    value: number
}

export const Rating = (props: RatingType) => {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )

}
type StarPropsType = {
    selected: boolean
}
const Star = (props: StarPropsType) => {
    if (props.selected === true) {
        return <span><b>star </b> </span>
    } else {
        return <span>star </span>
    }

}