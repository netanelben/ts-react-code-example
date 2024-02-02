import { StoryFn, Meta } from '@storybook/react';
import UserActivity, { Props } from '.';

export default {
    title: 'Components/UserActivity',
    component: UserActivity,
} as Meta<typeof UserActivity>;

const Template: StoryFn<typeof UserActivity> = (args: Props) => <UserActivity {...args} />;
export const Main = Template.bind({});

Main.args = {
    items: [
        {
            address: '0x6238872a0872a0872a0872a02a0872a0872a0c69e',
            transaction: {
                href: '#',
                title: 'Opensea: Main Pr...',
            },
            time: '13 days 4 hours ago',
            rewards: 'Doctor Main',
        },
        {
            address: '0x6238872a0872a0872a0872a02a0872a0872a0c69e',
            transaction: {
                href: '#',
                title: 'Opensea: Main Pr...',
            },
            time: '13 days 4 hours ago',
            rewards: 'Doctor Main',
        },
        {
            address: '0x6238872a0872a0872a0872a02a0872a0872a0c69e',
            transaction: {
                href: '#',
                title: 'Opensea: Main Pr...',
            },
            time: '13 days 4 hours ago',
            rewards: 'Doctor Main',
        },
        {
            address: '0x6238872a0872a0872a0872a02a0872a0872a0c69e',
            transaction: {
                href: '#',
                title: 'Opensea: Main Pr...',
            },
            time: '13 days 4 hours ago',
            rewards: 'Doctor Main',
        },
    ],
};
