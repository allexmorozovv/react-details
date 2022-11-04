import React from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {Rating} from "./components/Rating";
import {OnOff} from "./components/OnOff";
import {Accordion} from "./components/Accordion";

const App = () => {
    return (
        <div className="App">
            <OnOff />
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <UncontrolledAccordion title={'-- Menu --'}/>
            <Accordion title={'-- User --'} collapsed={false}/>
        </div>
    );
}

export default App;
