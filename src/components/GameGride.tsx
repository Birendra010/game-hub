// import { SimpleGrid, Text } from "@chakra-ui/react";
// import { GameQuery } from "../App";
// import useGames from "../hooks/useGames";
// // import { Genre } from "../hooks/useGenres";
// import GameCard from "./GameCard";
// import GameCardContainer from "./GameCardContainer";
// import GameCardSkeleton from "./GameCardSkeleton";

// interface Props {
//     gameQuery: GameQuery;
// }

// const GameGrid = ({ gameQuery }: Props) => {
//     const { data, error, isLoading } = useGames(gameQuery);
//     const skeletons = new Array(15).fill(null);

//     // if (error) return <Text>{error}</Text>;

//     return (
//         <SimpleGrid
//             columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
//             padding="10px"
//             spacing={6}
//         >
//             {isLoading &&
//                 skeletons.map((skeleton) => (
//                     <GameCardContainer key={skeleton}>
//                         <GameCardSkeleton />
//                     </GameCardContainer>
//                 ))}
//             {data?.results.map((game) => (
//                 <GameCardContainer key={game.id}>
//                     <GameCard game={game} />
//                 </GameCardContainer>
//             ))}
//         </SimpleGrid>
//     );
// };

// export default GameGrid;




import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
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
                <Button onClick={() => fetchNextPage()} marginY={5}>
                    {isFetchingNextPage ? 'Loading...' : 'Load More'}
                </Button>
            )}
        </Box>
    );
};

export default GameGrid;