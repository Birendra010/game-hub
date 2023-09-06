import { Box } from "@chakra-ui/react";
// import { all } from "axios";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
    return (
        <Box borderRadius={10} overflow="hidden" minHeight="15rem" _hover={{ transform: "scale(1.04)" }}  transition="all .2s ease-in-out" >
            {children}
        </Box>
    );
};

export default GameCardContainer;
