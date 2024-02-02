import { StoryFn, Meta } from '@storybook/react';
import WalletDrawer, { Props } from './index.js';

export default {
    title: 'Wallet/WalletDrawer',
    component: WalletDrawer,
} as Meta<typeof WalletDrawer>;

const Template: StoryFn<typeof WalletDrawer> = (args: any) => <WalletDrawer {...args} />;

export const Main = Template.bind({});

const args: Props = {
    avatarSrc: 'https://bit.ly/dan-abramov',
    walletName: 'My Wallet',
    walletAddress: '0xf6AEfc54843FDA83437D67A2DbEc7A9BB834ff4E',
    balance: 6230.16836,
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
