import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
    id: number;
    name: string;
    background_image:string

}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<FetchGamesResponse>("/xgames")
            .then((res) => setGames(res.data.results))
            .catch((err) => setError(err.message));
    },[]);

    return (
        <>
            
                 { error && <Text>{error}</Text>}
            <div>
                {games.map((game) => (


                    
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                                src={game.background_image}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Living room Sofa</Heading>

                                <Text color='blue.600' fontSize='2xl'>
                                    $450
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                    
                    
                ))}
            </div> 







            
        </>
    );
};

export default GameGrid;