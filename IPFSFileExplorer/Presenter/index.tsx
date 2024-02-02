import { useState } from 'react';
import { Box, Flex, Button, Center, useTheme, useDisclosure } from '@chakra-ui/react';
import FileExplorerTable from './FileExplorerTable';

export interface Props {
    items: any;
    handleCancel: any;
    handleSelectFiles: any;
    handleUploadFiles: any;
    handleNewFolder: any;
    handleUploadNewFolder: any;
}

const IPFSFileExplorerPresenter = ({
    items = [],
    handleUploadFiles,
    handleNewFolder,
    handleUploadNewFolder,
}: Props) => {
    const { themes } = useTheme();
    const { isOpen: isCheckboxVisible, onOpen, onClose } = useDisclosure();
    const [selected, setSelected] = useState<string[]>([]);

    const handleSelect = (id: string, state: boolean) => {
        let list;
        if (state) {
            list = [...selected, id];
        } else {
            list = selected.filter((i) => i !== id);
        }
        setSelected(list);
    };

    return (
        <>
            <Box bg={themes.color5} border={`1px solid ${themes.color6}`} borderRadius={12} overflowY={'auto'} pb={4}>
                <FileExplorerTable items={items} isCheckboxVisible={isCheckboxVisible} handleSelect={handleSelect} />
                <Flex align={['flex-start', 'center']} justify={'space-between'} p={6} gap={[2, 0]}>
                    <Box>
                        {isCheckboxVisible && (
                            <Button
                                onClick={onClose}
                                w={['100%', 171]}
                                variant={'ghost'}
                                bg={themes.color10}
                                borderRadius={12}
                            >
                                Cancel
                            </Button>
                        )}
                    </Box>
                    <Flex gap={4} flexDir={['column', 'row']} w={['100%', 'auto']}>
                        {isCheckboxVisible ? (
                            <Button
                                onClick={handleUploadFiles}
                                w={['100%', 171]}
                                variant={'form'}
                                disabled={!selected.length}
                            >
                                Upload Files
                            </Button>
                        ) : (
                            <Button onClick={onOpen} w={['100%', 171]} variant={'form'}>
                                Select Files
                            </Button>
                        )}
                        <Button onClick={handleNewFolder} w={['100%', 171]} variant={'form'}>
                            + New Folder
                        </Button>
                    </Flex>
                </Flex>
            </Box>
            <Center my={8}>
                <Button onClick={handleUploadNewFolder} w={['100%', '20%']} variant={'form'} mx={'auto'}>
                    Upload new folder
                </Button>
            </Center>
        </>
    );
};

export default IPFSFileExplorerPresenter;
