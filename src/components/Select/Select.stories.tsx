import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Select>;

export const WithValue = () => {
    const [value, setValue] = useState("2")

    return <Select value={value}
                   onChange={setValue}
                   items={[
                       {value: "1", title: "Rome"},
                       {value: "2", title: "Paris"},
                       {value: "3", title: "London"}
                   ]}/>
}
export const WithOutValue = () => {
    const [value, setValue] = useState(null)
    return <Select value={value}
                   onChange={setValue}
                   items={[
                       {value: "1", title: "Rome"},
                       {value: "2", title: "Paris"},
                       {value: "3", title: "London"}
                   ]}/>
}




