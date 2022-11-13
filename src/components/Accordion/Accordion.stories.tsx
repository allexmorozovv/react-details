import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Accordion>;

const actionHandler = action("accordion mode change event fired")

export const CollapsedMode = () => <Accordion title={'Menu'} collapsed={true} onClick={actionHandler}/>
export const UncollapsedMode = () => <Accordion title={'Menu'} collapsed={false} onClick={actionHandler}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={'Menu'} collapsed={value} onClick={setValue}/>
}


