import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Uncontrolled Rating',
    component: UncontrolledRating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof UncontrolledRating>;

const actionHandler = action('rating changed inside component')

export const EmptyRating = () => <UncontrolledRating defaultValue={0} onChange={actionHandler}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={actionHandler}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={actionHandler}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={actionHandler}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={actionHandler}/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={actionHandler}/>



