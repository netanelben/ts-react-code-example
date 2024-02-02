import { Table, Thead, Tbody, Tr, Th, TableContainer, Text, useTheme } from '@chakra-ui/react';
import TableItem, { ItemProps } from './FileExplorerTableItem';

const TABLE_HEADERS = ['IPFS Hash', 'SIZE', 'ACTION'];

export interface TableProps {
    items: ItemProps[];
    isCheckboxVisible: boolean;
    handleSelect: (id: string, state: boolean) => any;
}

const FileExplorerTable = ({ items = [], isCheckboxVisible, handleSelect }: TableProps) => {
    const { themes } = useTheme();

    return (
        <TableContainer w={'100%'} fontWeight={600} textColor={themes.color4}>
            <Table variant="simple">
                <Thead bg={themes.color6}>
                    <Tr>
                        <Th border={0}>
                            <Text fontSize={14} color={themes.color4} textTransform={'lowercase'}>
                                Index of /ipfs/
                                <Text display={'inline'} color={themes.color1}>
                                    bafcgvhbjnkmjnhgfdresrdtfyguhi
                                </Text>
                            </Text>
                        </Th>
                        {TABLE_HEADERS.map((title, key) => (
                            <Th key={key} color={themes.color4} p={6} fontWeight={600} fontSize={18} border={0}>
                                {title}
                            </Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {items.map((item: ItemProps, key) => (
                        <TableItem
                            key={key}
                            {...item}
                            isCheckboxVisible={isCheckboxVisible}
                            handleSelect={handleSelect}
                        />
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default FileExplorerTable;
