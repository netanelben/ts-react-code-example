import { VStack, Button, Text, useTheme } from '@chakra-ui/react';
import { Icon } from '../../../web3-redux-components';

export interface Props {
    handleUpload?: any;
    handleCreate?: any;
    handleSave?: any;
    handleDelete?: any;
}

const ActionMenu = ({ handleUpload, handleCreate, handleSave, handleDelete }: Props) => {
    const { themes } = useTheme();

    return (
        <VStack bg={themes.color6} borderRadius={8} p={2} fontSize={16} fontWeight={600} w={146} justify={'center'}>
            <Button
                onClick={handleUpload}
                variant={'ghost'}
                w={'100%'}
                leftIcon={<Icon icon={'pencil'} size={18} mr={2} color={'white'} />}
            >
                <Text w={'100%'} textAlign={'left'}>
                    Upload
                </Text>
            </Button>
            <Button
                onClick={handleCreate}
                variant={'ghost'}
                w={'100%'}
                leftIcon={<Icon icon={'pencil'} size={18} mr={2} color={'white'} />}
            >
                <Text w={'100%'} textAlign={'left'}>
                    Create
                </Text>
            </Button>
            <Button
                onClick={handleSave}
                variant={'ghost'}
                w={'100%'}
                leftIcon={<Icon icon={'pencil'} size={18} mr={2} color={'white'} />}
            >
                <Text w={'100%'} textAlign={'left'}>
                    Save
                </Text>
            </Button>
            <Button
                onClick={handleDelete}
                variant={'ghost'}
                w={'100%'}
                color={themes.color10}
                leftIcon={<Icon icon={'pencil'} size={18} mr={2} color={'white'} />}
            >
                <Text w={'100%'} textAlign={'left'}>
                    Delete
                </Text>
            </Button>
        </VStack>
    );
};

export default ActionMenu;
