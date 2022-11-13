import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
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

const actionHandler = action("accordion mode change event fired")

// export const CollapsedMode = () => <UncontrolledAccordion title={'Menu'} />
// export const UncollapsedMode = () => <UncontrolledAccordion title={'Menu'} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <UncontrolledAccordion title={'Menu'}/>
}


