import { StoryFn, Meta } from '@storybook/react';
import NFT_METADATA from '../../utils/PlacholderDummyData';
import CollectionGrid, { Props } from '.';

const loadData = () => {
    return [...NFT_METADATA, ...NFT_METADATA];
};

export default {
    title: 'Data Display/Collection/CollectionGrid',
    component: CollectionGrid,
} as Meta<typeof CollectionGrid>;

const Template: StoryFn<typeof CollectionGrid> = (args: any) => <CollectionGrid {...args} />;

export const Main = Template.bind({});

const mainArgs: Props = {
    items: NFT_METADATA,
    loadData,
};

Main.args = mainArgs;
