import { useRef } from 'react';
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    Button,
    Box,
    Center,
    Avatar,
    Text,
    useTheme,
    useDisclosure,
} from '@chakra-ui/react';
import  IconWallet from './assets/wallet.svg?react';
import WalletBalance from '../WalletBalance';
import { Props as WalletTokenProps } from '../WalletToken';
import WalletTokens from '../WalletTokens';

export interface Props {
    avatarSrc?: string;
    walletName?: string;
    walletAddress?: string;
    balance?: number;
    tokens?: WalletTokenProps[];
    handleClick?: () => any;
}

const WalletDrawer = ({ avatarSrc, walletName = 'My Wallet', walletAddress, balance, tokens }: Props) => {
    const { themes } = useTheme();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
        <>
            {/* @ts-ignore */}
            <Button ref={btnRef} onClick={onOpen} bg={'transparent'} variant="" _hover={{ opacity: 0.5 }}>
                <Box boxSize={6}>
                    <IconWallet />
                </Box>
            </Button>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={'sm'} trapFocus={false}>
                <DrawerOverlay />
                <DrawerContent>
                    <Box h={'100%'} p={4} py={10} bg={themes.color5}>
                        <Center mb={7}>
                            <Avatar src={avatarSrc} boxSize={'80px'} />
                        </Center>

                        <Text fontSize={20} fontWeight={600} color={themes.color7} mb={4} textAlign={'center'}>
                            {walletName}
                        </Text>
                        <Text isTruncated={true} fontSize={16} fontWeight={600} w={'170px'} mx={'auto'}>
                            {walletAddress}
                        </Text>

                        <Box my={6} w={'100%'}>
                            <WalletBalance balance={balance ?? 0} />
                        </Box>
                        <WalletTokens tokens={tokens ?? []} />
                    </Box>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default WalletDrawer;
