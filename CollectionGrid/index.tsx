import { useMemo } from 'react';
import { Box, Grid, GridItem, Collapse, Button, Spinner, Center, useTheme, useDisclosure } from '@chakra-ui/react';
import { NFTInstancePresenter } from '../../web3-redux-components';
import CollectionFiltersMenu from '../CollectionFiltersMenu';
import { Link } from '@tanstack/react-router';

export interface Props {
    items?: any[];
    pageSize?: number;
    hasMoreItems?: boolean;
    loadData?: any;
    handleFavorite?: any;
    hasFilters?: boolean;
    address: string;
}

const CollectionGrid = ({
    items = [],
    loadData = console.log,
    pageSize = 8,
    hasMoreItems = false,
    handleFavorite,
    hasFilters = false,
    address,
}: Props) => {
    const { themes } = useTheme();
    const { isOpen, onToggle } = useDisclosure();
    const filterItems: any = [];

    const splitItems = useMemo(() => {
        const chunks: string[][] = [];
        for (let i = 0; i < items.length; i += pageSize) {
            chunks.push(items.slice(i, i + pageSize));
        }
        return chunks;
    }, [items, pageSize]);

    return (
        <>
            {hasFilters && (
                <Box w={'100%'}>
                    <Button mr={2} onClick={onToggle} bg={themes.color5} p={6} mb={4}>
                        Filters
                    </Button>

                    <Collapse animateOpacity in={isOpen}>
                        <CollectionFiltersMenu items={filterItems} />
                    </Collapse>
                </Box>
            )}

            <Center w={'100%'}>
                <Grid
                    w={'100%'}
                    gap={10}
                    templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
                >
                    {splitItems[0]?.map((item: any, key: any) => (
                        <GridItem
                            key={key}
                            mb={[4, 0]}
                            _hover={{ transform: 'scale(1.05)' }}
                            transition={'300ms ease-in-out'}
                        >
                            <Link to={`/explore/${address}/${item.address}?networkId=${item.networkId}`}>
                                <NFTInstancePresenter {...item} isSelected={false} handleFavorite={handleFavorite} />
                            </Link>
                        </GridItem>
                    ))}
                </Grid>
            </Center>
        </>
    );
};
export default CollectionGrid;
