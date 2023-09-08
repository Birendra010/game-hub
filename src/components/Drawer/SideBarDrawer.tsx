import { useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, GridItem } from "@chakra-ui/react"
import { AiOutlineMenu } from 'react-icons/ai'
import GenreList from "../GenreList"
import { Genre } from "../../hooks/useGenres"


interface Props {
    selectedGenre: Genre |null
    onSelectGenre: (genre: Genre) => void
    
}
function SideBarDrawer({ selectedGenre, onSelectGenre }:Props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  

    return (
        <>
          
            <Button  onClick={onOpen}  fontSize='4xl' >
                <AiOutlineMenu />
             </Button>
            
        
            <Drawer  placement="left"  onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px' >Game Drawer</DrawerHeader>
                    <DrawerBody>
                        <GridItem area="aside" >
                            <GenreList selectedGenre={selectedGenre} onSelectGenre={onSelectGenre} />
                        </GridItem>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default SideBarDrawer