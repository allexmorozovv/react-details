import React, {useState} from "react";

export const UncontrolledRating = () => {

    let [value, setValue] = useState(4)
    return (
        <div>
            <Star selected={value > 0}/><button onClick={() => {setValue(1)}}>1</button>
            <Star selected={value > 1}/><button onClick={() => {setValue(2)}}>1</button>
            <Star selected={value > 2}/><button onClick={() => {setValue(3)}}>1</button>
            <Star selected={value > 3}/><button onClick={() => {setValue(4)}}>1</button>
            <Star selected={value > 4}/><button onClick={() => {setValue(5)}}>1</button>
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