import { StoryFn, Meta } from '@storybook/react';
import IPFSFileExplorer, { Props } from '.';

const Wrapper = (props: Props) => {
    return <IPFSFileExplorer {...props} />;
};

export default {
    title: 'Data Display/IPFSFileExplorer',
    component: IPFSFileExplorer,
} as Meta<typeof IPFSFileExplorer>;

const Template: StoryFn<typeof IPFSFileExplorer> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});

// @ts-ignore
Main.args = {
    items: [
        {
            fileName: 'README.txt',
            fileExt: 'txt',
            IPFSHash: '0xf6AEfc54843FDA83437D67A2DbEc7A9BB834ff4E',
            size: 1200,
        },
        {
            fileName: '_Metadata.json',
            fileExt: 'json',
            IPFSHash: '0xf6AEfc54843FDA83437D67A2DbEc7A9BB834ff4E',
            size: 12000,
        },
        {
            fileName: 'image.jpg',
            fileExt: 'txt',
            IPFSHash: '0xf6AEfc54843FDA83437D67A2DbEc7A9BB834ff4E',
            size: 1200000,
        },
        {
            fileName: 'notes.txt',
            fileExt: 'txt',
            IPFSHash: '0xf6AEfc54843FDA83437D67A2DbEc7A9BB834ff4E',
            size: 2500,
        },
    ],
};
