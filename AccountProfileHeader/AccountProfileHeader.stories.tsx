import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import AccountProfileHeader, { Props } from '.';

export default {
    title: 'Components/AccountProfileHeader',
    component: AccountProfileHeader,
} as Meta<typeof AccountProfileHeader>;

const Template: StoryFn<typeof AccountProfileHeader> = (args: any) => <AccountProfileHeader {...args} />;
export const Main = Template.bind({});

const args: Props = {
    username: 'Mainy Main',
    address: '0x6a61d9971f9186e8a8819d9a8f',
    networkId: '1',
    accountBio:
        'DeFi Land NFT Seeds - Plant it to grow Gen-0Utitility NFTs to starts earning by playing in in DeFi Utitility NFTs to starts earning by playing in in DeFi Land',
};
Main.args = args;
