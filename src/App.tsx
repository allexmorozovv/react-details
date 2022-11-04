import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";
import {OnOff} from "./components/OnOff";

const App = () => {
    return (
        <div className="App">
            <OnOff />
            <OnOff />
            <OnOff/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Accordion title={'Hey'} collapsed={true}/>*/}
            {/*<Accordion title={'Yo'} collapsed={false}/>*/}
        </div>
    );
}

export default App;
