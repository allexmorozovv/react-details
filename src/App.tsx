import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating";
import {OnOff} from "./components/OnOff";
import {Accordion} from "./components/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating";

const App = () => {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed]=useState(true)
    let [onControlled,setOnControlled]=useState(false)

    return (
        <div className="App">
            <OnOff callBack={setOnControlled} onControlled={onControlled}/>
            {/*<UncontrolledAccordion title={'-- Menu --'}/>*/}
            <Accordion title={'-- User --'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <UncontrolledRating/>

        </div>
    );
}

export default App;
