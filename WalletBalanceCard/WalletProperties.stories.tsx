import { StoryFn, Meta } from '@storybook/react';
import WalletBalanceCard, { Props } from '.';

export default {
    title: 'Components/WalletBalanceCard',
    component: WalletBalanceCard,
} as Meta<typeof WalletBalanceCard>;

const Wrapper = (props: any) => {
    return <WalletBalanceCard {...props} />;
};

const Template: StoryFn<typeof WalletBalanceCard> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});

const args: Props = {
    ethValue: 100,
    ethValueUSD: 20000,
    balance: 54000,
    tokenId: 1,
};
Main.args = args;
