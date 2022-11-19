import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'components/Accordion',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Accordion>;


// const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;
//
// export const CollapsedMode = Template.bind({})
// CollapsedMode.args = {
//     title: 'Menu',
//     collapsed: true,
//     onClick: actionHandler
// }
// export const UnCollapsedMode = Template.bind({})
// UnCollapsedMode.args = {
//     title: 'Menu',
//     collapsed: false,
//     onClick: actionHandler
// }

//
const actionHandler = action("accordion mode change event fired")
const actionItemHandler = action("some item was clicked")

export const CollapsedMode = () => {
    return <Accordion title={'Menu'}
                      collapsed={true}
                      onClick={actionHandler}
                      items={[]}
                      onItemClick={actionItemHandler}/>
}

export const UnCollapsedMode = () => {
    return <Accordion title={'Menu'}
                      collapsed={false}
                      onClick={actionHandler}
                      items={[
                          {value: 1, title: "Alex"},
                          {value: 2, title: "Bob"},
                          {value: 3, title: "Tom"}
                      ]}
                      onItemClick={actionItemHandler}/>
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={'Menu'}
                      collapsed={value}
                      onClick={setValue}
                      items={[
                          {value: 1, title: "Alex"},
                          {value: 2, title: "Bob"}, {value: 3, title: "Tom"}
                      ]}
                      onItemClick={actionItemHandler}/>
}



