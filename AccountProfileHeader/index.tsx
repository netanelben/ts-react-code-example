import React from 'react';
import { Link } from '@tanstack/react-router';
import { Icon, AddressDisplay } from '../../web3-redux-components';
import { Box, Container, Text, HStack, VStack } from '@chakra-ui/react';
import DefaultProfileBG from './assets/default-profile-bg.svg';
import LogoImage from '../LogoImage';
import BannerImage from '../BannerImage';

export interface Props {
    headerBgSrc?: string;
    avatarSrc?: string;
    username?: string;
    networkId?: string;
    address?: string;
    accountBio?: string;
    shareLink?: string;
    editLink?: string;
    readOnly?: boolean;
}

const AccountProfileHeader = ({
    headerBgSrc = DefaultProfileBG,
    avatarSrc,
    username,
    networkId,
    address,
    accountBio,
    shareLink,
    editLink,
    readOnly = true,
}: Props) => {
    return (
        <>
            <BannerImage imageSrc={headerBgSrc} readOnly={readOnly} />

            <Container>
                <HStack>
                    <Box mt={[0, -20]} mr={4}>
                        <LogoImage imageSrc={avatarSrc} readOnly={readOnly} />
                    </Box>

                    <HStack align={'center'} justify={'space-between'} w={'100%'}>
                        <VStack align={'start'}>
                            <HStack pt={3}>
                                <Text fontWeight={700} fontSize={24} mr={8} w={['100%', 'auto']}>
                                    {username}
                                </Text>
                                {address && (
                                    <Box display={['none', 'initial']}>
                                        <AddressDisplay
                                            address={address}
                                            controls={['icon', 'copy']}
                                            bg={'transparent'}
                                            networkId={networkId}
                                        />
                                    </Box>
                                )}
                            </HStack>
                            <Text maxW={['100%', '470px']} isTruncated={true} noOfLines={3} whiteSpace="inherit">
                                {accountBio}
                            </Text>
                        </VStack>

                        <HStack display={['none', 'initial']} flexShrink={0} spacing={4}>
                            {shareLink && (
                                <Link to={shareLink}>
                                    <Icon
                                        icon="heart"
                                        display={'inline-block'}
                                        size={18}
                                        verticalAlign={'bottom'}
                                        mr={2}
                                    />
                                    Share
                                </Link>
                            )}
                            {editLink && (
                                <Link to={editLink}>
                                    <Icon
                                        icon="pencil"
                                        display={'inline-block'}
                                        size={20}
                                        verticalAlign={'bottom'}
                                        mr={2}
                                    />
                                    Edit
                                </Link>
                            )}
                        </HStack>
                    </HStack>
                </HStack>
            </Container>
        </>
    );
};

export default AccountProfileHeader;
