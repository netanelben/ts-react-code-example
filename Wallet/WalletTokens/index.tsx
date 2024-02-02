import { Box, Button, useTheme } from '@chakra-ui/react';
import WalletToken, { Props as WalletTokenProps } from '../WalletToken';

export interface Props {
    tokens: WalletTokenProps[];
    handleViewAllTokens?: () => any;
}

const WalletTokens = ({ tokens = [], handleViewAllTokens }: Props) => {
    const { themes } = useTheme();

    return (
        <Box borderRadius={12} bg={themes.color5} border={'1px solid'} borderColor={themes.color6} px={6} w={'100%'}>
            {tokens.map((token: WalletTokenProps, key: any) => (
                <Box key={key} borderBottom={'1px solid'} borderColor={themes.color6} py={6}>
                    <WalletToken {...token} />
                </Box>
            ))}
            <Button variant={'link'} fontSize={16} py={5} w={'100%'} onClick={handleViewAllTokens}>
                View all Available Tokens
            </Button>
        </Box>
    );
};

export default WalletTokens;
