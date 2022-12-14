import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

const App = () => {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed]=useState(true)
    let [onControlled,setOnControlled]=useState(false)

    return (
        <div className="App">
            <OnOff callBack={setOnControlled} onControlled={onControlled}/>
            {/*<Accordion title={'-- User --'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed} items={["Alex","Bob","Tom"]}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue} />
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <UncontrolledOnOff onChange={setOnControlled}/>
            <UncontrolledAccordion title={'-- Menu --'}/>
            <UncontrolledRating onChange={()=>{}}/>
        </div>
    );
}

export default App;
