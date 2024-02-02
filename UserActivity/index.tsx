import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Avatar, Box, Text, useTheme } from '@chakra-ui/react';

const TABLE_HEADERS = ['Address', 'transaction', 'time', 'Rewards'];

export interface TxnProps {
    href: string;
    title: string;
}

export interface ActivityProps {
    address: string;
    transaction: TxnProps;
    time: string;
    rewards: string;
}

export interface Props {
    items: ActivityProps[];
}

const ActivityCard = ({ items = [] }: Props) => {
    const { themes } = useTheme();

    return (
        <TableContainer w={'100%'} fontWeight={600} textColor={themes.color4}>
            <Box border={`1px solid ${themes.color6}`} borderRadius={12} overflowY={'auto'}>
                <Table variant="simple" bg={themes.color5}>
                    <Thead bg={themes.color6}>
                        <Tr>
                            {TABLE_HEADERS.map((title, key) => (
                                <Th key={key} color={themes.color4} p={6} fontWeight={600} fontSize={18} border={0}>
                                    {title}
                                </Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {items.map((item, key) => (
                            <Tr key={key}>
                                <Td border={0}>
                                    <Avatar boxSize={'48px'} float={'left'} mr={3} />
                                    <Box>
                                        <Text fontSize={18} mb={1}>
                                            CryptoonGoonz
                                        </Text>
                                        <Text isTruncated fontSize={14} maxW={'145px'} color={themes.color8}>
                                            {item.address}
                                        </Text>
                                    </Box>
                                </Td>
                                <Td border={0}>
                                    <Text fontSize={18} fontWeight={600}>
                                        <a href={item?.transaction?.href}>{item?.transaction?.title}</a>
                                    </Text>
                                </Td>
                                <Td border={0}>
                                    <Text fontSize={18} fontWeight={600}>
                                        {item.time}
                                    </Text>
                                </Td>
                                <Td border={0}>
                                    <Text fontSize={18} fontWeight={600}>
                                        {item.rewards}
                                    </Text>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </TableContainer>
    );
};

export default ActivityCard;
