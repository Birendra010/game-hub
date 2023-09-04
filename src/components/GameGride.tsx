import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
    selectedGenre: Genre | null
}

const GameGrid = ({ selectedGenre }: Props) => {
    const { data, error, isLoading } = useGames(selectedGenre);
    const length = 15;
    const skeletons = new Array(length).fill(null)

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                padding="10px"
                spacing={3}
            >
                {isLoading &&
                    skeletons.map((skeleton,index) => (
                        <GameCardContainer key={index}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {data.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;