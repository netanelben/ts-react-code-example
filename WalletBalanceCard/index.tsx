import { useTheme, HStack, Box, Text, Button, Select } from '@chakra-ui/react';
import IconWallet from '../../assets/wallet.svg?react';

export interface Props {
    ethValue?: number;
    ethValueUSD?: number;
    balance?: number;
    tokenId?: number;
}

const WalletBalanceCard = ({ ethValue, ethValueUSD, balance, tokenId }: Props) => {
    const { themes } = useTheme();
    console.log({ tokenId });

    return (
        <>
            <HStack>
                <Text w={'30%'}>Ether Value</Text>
                <Text w={'50%'}>
                    {ethValue} ETH | {ethValueUSD} USD
                </Text>
            </HStack>
            <HStack my={4}>
                <Text w={'30%'}>Balance</Text>
                <Text w={'50%'}>{balance} USD</Text>
            </HStack>
            <HStack>
                <Text w={'30%'}>Token</Text>
                <HStack w={'50%'}>
                    <Select
                        h={30}
                        variant={'hollow'}
                        bg={'transparent'}
                        borderRadius={12}
                        borderWidth={1}
                        borderStyle={'solid'}
                        borderColor={themes.color8}
                        placeholder="Select a token"
                        w={'100%'}
                    />
                    <Button bg={'transparent'}>
                        <Box boxSize={7}>
                            <IconWallet />
                        </Box>
                    </Button>
                </HStack>
            </HStack>
        </>
    );
};

export default WalletBalanceCard;
