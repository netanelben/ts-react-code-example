import { StoryFn, Meta } from '@storybook/react';
import WalletToken from './index.js';

export default {
    title: 'Wallet/WalletToken',
    component: WalletToken,
} as Meta<typeof WalletToken>;

const Template: StoryFn<typeof WalletToken> = (args: any) => <WalletToken {...args} />;

export const Main = Template.bind({});

Main.args = {
    networkId: 1,
    tokenSymbol: 'ETH',
    tokenName: 'ethereum',
    balance: 100,
    valueUSD: 2500,
};
