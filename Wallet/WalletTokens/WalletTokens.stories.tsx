import { StoryFn, Meta } from '@storybook/react';
import WalletTokens, { Props } from './index.js';

export default {
    title: 'Wallet/WalletTokens',
    component: WalletTokens,
} as Meta<typeof WalletTokens>;

const Template: StoryFn<typeof WalletTokens> = (args: Props) => <WalletTokens {...args} />;

export const Main = Template.bind({});

const args: Props = {
    tokens: [
        {
            networkId: 1,
            tokenSymbol: 'ETH',
            tokenName: 'ethereum',
            balance: 12,
            valueUSD: 25000,
        },
        {
            networkId: 1,
            tokenSymbol: 'SOL',
            tokenName: 'solana',
            balance: 5.2524134,
            valueUSD: 250,
        },
    ],
};
Main.args = args;
