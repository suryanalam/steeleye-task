import { Search } from "./Search";

export default{
    title:'Components/search',
    component: Search
}

const Template = (args) => <Search {...args} />

export const Dark = Template.bind({});
 Dark.args = {
    variant: 'dark'
}

export const Light = Template.bind({});
 Light.args = {
    variant: 'light'
}

export const Small = Template.bind({});
 Small.args = {
    size: 'small'
}

export const Medium = Template.bind({});
 Medium.args = {
    size: 'medium'
}

export const Large = Template.bind({});
 Large.args = {
    size: 'large'
}