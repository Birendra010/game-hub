// import { HStack, Image, Show } from '@chakra-ui/react'
// import logo from '../assets/images.png';
// import ColorModeSwitch from './ColorModeSwitch';
// import SearchInput from './SearchInput';
// import SideBarDrawer from './Drawer/SideBarDrawer';
// import { Genre } from '../hooks/useGenres';

// interface Props {
//     selectedGenre: Genre|null
//     onSelectGenre:(genre:Genre)=>void
//     onSearch: (searchText: string) => void;
// }

// const NavBar = ({ onSearch, selectedGenre, onSelectGenre }: Props) => {
//     return (
      

//             <HStack padding='8px' position='fixed' width='100%' backgroundColor='#121211' zIndex='100'  flexDirection="row" justifyContent="space-between">
//                 <Image src={logo} boxSize='45px' /> 
//                 <SearchInput onSearch={onSearch} />
//                 <ColorModeSwitch />
//             <Show below="lg" >
//                 <SideBarDrawer onSelectGenre={onSelectGenre} selectedGenre={selectedGenre} />

//                 </Show>

//             </HStack>

     
//     )
// }

// export default NavBar



import { HStack, Image, Show } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import SideBarDrawer from './Drawer/SideBarDrawer';
import { Genre } from '../hooks/useGenres';

interface Props {
    selectedGenre: Genre | null
    onSelectGenre:(genre:Genre)=>void
}

const NavBar = ({ selectedGenre, onSelectGenre }: Props) => {
    return (
        <HStack padding='8px' position='fixed' width='100%' backgroundColor='#121211' zIndex='100' flexDirection="row" justifyContent="space-between">
            <Image src={logo} boxSize="45px" />
            <SearchInput />
            <ColorModeSwitch />
            <Show below="lg" >
                <SideBarDrawer onSelectGenre={onSelectGenre} selectedGenre={selectedGenre} />
            </Show>
        </HStack>
    );
};

export default NavBar;