import { Box, Heading, Text, Link, Icon, Drawer, Portal, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { navbarData } from '../../data/NavbarData';
import { NavLink, Link as RouterLink, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import DFCLogo from '../custom_icons/DFCLogo';

const NavIcon = () => {
  return (
    <Link as={RouterLink} to="/" aria-label="Home">
        <Box
            h="50px"
            w="90px"
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Box
                w='100%'
                cursor="pointer"
            >
                <DFCLogo
                logoWith="100%"
                LogoColor_1="#A39274"
                LogoColor_2="#DFD8C8"
                Variant={1}
                />
            </Box>
        </Box>      
    </Link>
  );
};


{/*const NavTitle = () => {
    return (
        <Link
            as={NavLink}
            to={"/"}
        >
            <Heading
                fontWeight="normal"
                color={"navbar_title"}
                cursor={'pointer'}
                size={'2xl'}
                display={['none', 'unset', 'unset']}
            >
                Dovci Forensic Consulting
            </Heading>
        </Link>
        
    )
};*/}

const NavButton = ({ buttonData, id }) => {
  const location = useLocation();
  const isActive = location.pathname === buttonData.Link;

  return (
    <Link
      as={RouterLink}
      to={buttonData.Link}
      display={['none', 'none', 'flex']}
      key={id} // move key here, not on Box
      _hover={{ textDecoration: 'none' }}
    >
      <Box
        cursor={'pointer'}
        display={'flex'}
        h='100%'
        w='100%'
        borderBottom={isActive ? 'solid' : 'none'}
        borderBottomColor={'navbar_navlink_active'}
        borderBottomWidth={'thin'}
        justifyContent="center"
        alignItems="center"
      >
        <Text
          color={isActive ? 'navbar_navlink_active' : 'navbar_navlink'}
          _hover={{ color: 'navbar_navlink_active' }}
        >
          {buttonData.Title}
        </Text>
      </Box>
    </Link>
  );
};

const MobileMenuButton = (props) => {
    const { onClick } = props;
    return (
        <Box
            w='30px'
            h='30px'
            display={['flex', 'flex', 'none']}
            alignContent={'center'}
            alignItems={'center'}
            pr={'50px'}
            cursor={'pointer'}
            onClick={onClick}
        >
            <Icon
                as={GiHamburgerMenu}
                fill={'navbar_navlink'}
                size={'lg'}
                _hover={{
                    "fill": "navbar_navlink_active"
                }}
            />

        </Box>
    )
    
}

const MobileMenuCloseButton = (props) => {
    const { onClick } = props;
    return (
        <Box
            w='40px'
            h='40px'
            display={'flex'}
            alignContent={'center'}
            alignItems={'center'}
            cursor={'pointer'}
            onClick={onClick}
        >
            <Icon
                as={IoIosCloseCircle}
                fill={'navbar_navlink'}
                size={'2xl'}
                _hover={{
                    "fill": "navbar_navlink_active"
                }}
            />

        </Box>   
    )
}

const MobileNavButton = ({ buttonData, id, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === buttonData.Link;

  return (
    <Link
      as={RouterLink}
      to={buttonData.Link}
      display={'flex'}
      key={id} // key here
      _hover={{ textDecoration: 'none' }}
      onClick={onClick}
    >
      <Box
        cursor={'pointer'}
        display={'flex'}
        justifyContent={'center'}
        h='100%'
        w='100%'
        borderBottom={isActive ? 'solid' : 'none'}
        borderBottomColor={'navbar_navlink_active'}
        borderBottomWidth={'thin'}
      >
        <Text
          color={isActive ? 'navbar_navlink_active' : 'navbar_navlink'}
          fontSize={'lg'}
          _hover={{ color: 'navbar_navlink_active' }}
        >
          {buttonData.Title}
        </Text>
      </Box>
    </Link>
  );
};


const MobileMenu = () => {
    const [open, setOpen] = useState(false)
    return (
        <Drawer.Root
            open={open}
            size={'xs'}
        >
            <Drawer.Trigger asChild>
                <MobileMenuButton
                    onClick={() => setOpen(true)}
                />
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop/>
                <Drawer.Positioner>
                    <Drawer.Content
                        bg={'navbar_bg'}
                    >
                        <Drawer.CloseTrigger asChild>
                            <Box
                                display={'flex'}
                                justifyItems={'right'}
                                pt={'7px'}
                            >
                                <MobileMenuCloseButton onClick={() => setOpen(false)} />
                            </Box> 
                        </Drawer.CloseTrigger>
                        <Drawer.Header
                            justifyContent={'center'}
                        >
                            <Box
                                h='50px'
                                w='150px'
                                //bg={'navbar_icon'}
                                alignContent={'center'}
                            >
                                <DFCLogo
                                    logoWith={'100%'}
                                    LogoColor_1={"#A39274"}
                                    LogoColor_2={"#DFD8C8"}
                                />
                            </Box>
                        </Drawer.Header>
                        
                        <Drawer.Body>
                            <VStack
                                gap={3}
                                borderTop={'solid'}
                                borderTopColor={'navbar_navlink_active'}
                                borderBottom={'solid'}
                                borderBottomColor={'navbar_navlink_active'}
                                p={5}
                            >
                                {navbarData.Buttons.map((buttonData, idx) => (
                                    <MobileNavButton
                                        id={idx}
                                        buttonData={buttonData}
                                        onClick={() => setOpen(false)}
                                    />
                                ))}
                            </VStack>
                            
                        </Drawer.Body>
                        <Drawer.Footer>

                        </Drawer.Footer>
                        
                    </Drawer.Content>
                </Drawer.Positioner>   
            </Portal>
        </Drawer.Root> 
          
    )
};

export const PublicNavbar = () => {
  return (
    <Box
        aria-label='Main website navigation'
        display="flex"
        alignItems="center"
        justifyContent={'space-between'}
        bg="navbar_bg"
        h='50px'
        w='100vw'
        position={'fixed'}
        zIndex={100}
    >
        <Box
            display={'flex'}
            gap={4}
            pl={'50px'}
            alignContent={'center'}
            alignItems={'center'}
        >
            <NavIcon />
            {/*<NavTitle />*/}
        </Box>
        
        <Box
            display={'flex'}
            gap={4}
            pr={'50px'}
        >
            {navbarData.Buttons.map((buttonData, idx) => (
                <NavButton
                    key={idx}
                    id={idx}
                    buttonData={buttonData}
                />
            ))}
        </Box>
        <MobileMenu />
        
    </Box>
  );
};