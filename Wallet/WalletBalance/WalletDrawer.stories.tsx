import { StoryFn, Meta } from '@storybook/react';
import WalletBalance, { Props } from './index.js';

export default {
    title: 'Wallet/WalletBalance',
    component: WalletBalance,
} as Meta<typeof WalletBalance>;

const Template: StoryFn<typeof WalletBalance> = (args: any) => <WalletBalance {...args} />;

export const Main = Template.bind({});

const args: Props = {
    balance: 6230.16836,
};
Main.args = args;
