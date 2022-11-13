import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Uncontrolled Accordion',
    component: UncontrolledAccordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof UncontrolledAccordion>;


export const ModeChanging = () => {
    return <UncontrolledAccordion title={'Menu'}/>
}


