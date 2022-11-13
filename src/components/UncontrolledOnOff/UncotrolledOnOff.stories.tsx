import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Uncontrolled OnOff',
    component: UncontrolledOnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof UncontrolledOnOff>;

const actionHandler = action("on or off clicked")

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={actionHandler}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={actionHandler}/>




