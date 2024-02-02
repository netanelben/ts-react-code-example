import { Box, Text, Button, useTheme, useDisclosure } from '@chakra-ui/react';
import { displayNumber } from '../../../utils/index';
import AddFundsModal from '../../AddFundsModal';

export interface Props {
    balance: number;
}

const WalletBalance = ({ balance }: Props) => {
    const { themes } = useTheme();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box borderRadius={12} bg={themes.color5} border={'1px solid'} borderColor={themes.color6} p={6} w={'100%'}>
                <Text fontSize={16} fontWeight={600} mb={5}>
                    Total balance
                </Text>
                <Text fontSize={32} fontWeight={700} color={themes.color7} mb={7}>
                    ${displayNumber(balance, 4)} USD
                </Text>
                <Button variant={'form'} fontSize={16} py={5} w={'100%'} onClick={onOpen}>
                    Add Funds
                </Button>
            </Box>

            <AddFundsModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default WalletBalance;
