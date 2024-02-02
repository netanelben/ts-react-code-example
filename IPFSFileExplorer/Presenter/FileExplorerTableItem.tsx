import {
    Box,
    Tr,
    Td,
    Flex,
    Text,
    Button,
    Checkbox,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useTheme,
} from '@chakra-ui/react';
import { Icon } from '../../../web3-redux-components';
import { FileIcon } from 'react-file-icon';
import ActionMenu from './ActionMenu';
import { bytesToSize } from '../../../utils';

export interface ItemProps {
    fileName: string;
    fileExt: string;
    IPFSHash: string;
    size: number;
    isCheckboxVisible: boolean;
    handleSelect: (id: string, state: boolean) => any;
}

const FileExplorerTableItem = ({
    fileName,
    fileExt,
    IPFSHash,
    size,
    isCheckboxVisible = false,
    handleSelect,
}: ItemProps) => {
    const { themes } = useTheme();

    return (
        <Tr borderBottom={`1px solid ${themes.color6}`}>
            <Td border={0}>
                <Flex alignItems={'center'}>
                    {isCheckboxVisible && (
                        <Checkbox mr={4} onChange={({ target }) => handleSelect(fileName, target.checked)} />
                    )}
                    <Box boxSize={4} mr={4}>
                        <FileIcon extension={fileExt} fold={false} type={'vector'} />
                    </Box>
                    <Text fontSize={18} fontWeight={600}>
                        {fileName}
                    </Text>
                </Flex>
            </Td>
            <Td border={0}>
                <Text isTruncated fontSize={18} fontWeight={600} maxW={'145px'} color={themes.color1}>
                    {IPFSHash}
                </Text>
            </Td>
            <Td border={0}>
                <Text fontSize={18} fontWeight={600}>
                    {bytesToSize(size)}
                </Text>
            </Td>
            <Td border={0}>
                <Popover>
                    <PopoverTrigger>
                        <Button
                            bg={themes.color6}
                            color={themes.color7}
                            borderRadius={20}
                            w={172}
                            h={'40px'}
                            float={'right'}
                            leftIcon={<Icon icon={'pencil'} size={18} />}
                        >
                            Edit
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent bg={'transparent'} w={'auto'} border={0} _focus={{ outline: 0 }} boxShadow={'sm'}>
                        <ActionMenu />
                    </PopoverContent>
                </Popover>
            </Td>
        </Tr>
    );
};

export default FileExplorerTableItem;
