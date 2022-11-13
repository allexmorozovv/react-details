import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff',
    component: OnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof OnOff>;

const actionHandler = action("on or off clicked")

export const OnMode = () => <OnOff onControlled={true} callBack={actionHandler}/>
export const OffMode = () => <OnOff onControlled={false} callBack={actionHandler}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff onControlled={value} callBack={setValue}/>
}


