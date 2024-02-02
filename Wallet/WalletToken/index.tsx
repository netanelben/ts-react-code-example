import { Box, Text, VStack, HStack, useTheme } from '@chakra-ui/react';
import { NetworkIcon } from '../../../web3-redux-components';
import { displayNumber } from '../../../utils';

export interface Props {
    networkId: number;
    tokenSymbol: string;
    tokenName: string;
    balance: number;
    valueUSD: number;
}

const WalletToken = ({ networkId, tokenSymbol, tokenName, balance, valueUSD }: Props) => {
    const { themes } = useTheme();

    return (
        <HStack>
            <NetworkIcon networkId={networkId} size={36} />
            <VStack align={'flex-start'} justify={'center'} pl={2}>
                <Text fontSize={16} fontWeight={600} color={themes.color7} lineHeight={1}>
                    {tokenSymbol}
                </Text>
                <Text fontSize={14} fontWeight={400} color={themes.color9} lineHeight={1} textTransform={'capitalize'}>
                    {tokenName}
                </Text>
            </VStack>
            <VStack flex={1} align={'flex-end'}>
                <Text fontSize={16} fontWeight={600} color={themes.color7}>
                    {displayNumber(balance, 4)}
                </Text>
                <Text fontSize={14} fontWeight={400} color={themes.color9}>
                    ${valueUSD} USD
                </Text>
            </VStack>
        </HStack>
    );
};

export default WalletToken;
