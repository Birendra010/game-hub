
import { Box, HStack, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';


interface Props {
    gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
    const {
        data,
        error,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useGames(gameQuery);
    const skeletons = new Array(15).fill(null);

//handal infinite scroll window 
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
            return;
        }
        fetchNextPage();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);


    if (error) return <Text>{error.message}</Text>;





    return (
        <Box padding="10px">
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                spacing={6}
                
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map((game) => (
                            <GameCardContainer key={game.id}>
                                <GameCard game={game} />
                            </GameCardContainer>
                        ))}
                    </React.Fragment>
                ))}
            </SimpleGrid>
            {hasNextPage && (
                <HStack m={30} p={30} justifyContent="center"> {isFetchingNextPage && <Spinner mx="auto" size='xl' />}</HStack>
            )}
        </Box>
    );
};

export default GameGrid;